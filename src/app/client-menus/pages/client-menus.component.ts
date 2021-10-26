import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { forkJoin } from "rxjs";
import { BusinessDetailsResponse } from "src/app/business-details/models/business-details-response";
import { CreateReservationComponent } from "src/app/create-reservation/pages/create-reservation.component";
import { Menu, MenuResponse } from "@app/core/services/menus/menu-response";
import { MenuService } from "@app/core/services/menus/menu.service";
import { RestaurantService } from "@app/core/services/restaurant.service";

@Component({
  selector: "app-client-menus",
  templateUrl: "./client-menus.component.html",
  styleUrls: ["./client-menus.component.scss"],
})
export class ClientMenusComponent implements OnInit {
  public form: FormGroup;
  public panelOpenState = true;
  public total = 0;
  public cart: FormGroup[] = [];
  public restaurant: BusinessDetailsResponse = null;
  public menus: MenuResponse[] = [];
  public ratingsArray: Array<number> = [];
  public noRatingsArray: Array<number> = [];

  public constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private menuService: MenuService,
    private restaurantService: RestaurantService
  ) {}

  public get sections(): FormArray {
    return this.form.controls["sections"] as FormArray;
  }

  public ngOnInit(): void {
    this.initForm();
    this.getData();
  }

  public saveChanges(): void {
    // console.log(this.form);
  }

  public openReservationModal(): void {
    const dialogRef = this.dialog.open(CreateReservationComponent, {
      maxWidth: "95%",
      minWidth: "55%",
      panelClass: "create-reservation-dialog",
      data: { total: this.total },
    });
  }

  public products(form: any): FormArray {
    return form.controls.products ? form.controls.products.controls : new FormArray([]);
  }

  public addProduct(product: FormGroup): void {
    const control = product.get("quantity");
    let value: number = control.value;
    value = value + 1;

    if (value <= 30) {
      control.setValue(value);
      this.cart.push(product);
      this.updateTotal();
    }
  }

  public deleteProduct(product: FormGroup): void {
    const control = product.get("quantity");
    let value: number = control.value;
    value = value - 1;

    if (value >= 0) {
      control.setValue(value);
      const index = this.cart.findIndex((x) => x.get("id").value === product.get("id").value);
      this.cart.splice(index, 1);
      this.updateTotal();
    }
  }

  private updateTotal() {
    this.total = this.cart.reduce((sum, current) => sum + +current.get("price").value, 0);
  }

  private initForm() {
    this.form = this.fb.group({
      sections: this.fb.array([]),
    });
  }

  private getData(): void {
    this.activatedRoute.queryParams.subscribe((x) => {
      const restaurant = this.restaurantService.getRestaurant(x.id);
      const menus = this.menuService.getMenusByBranch(x.id);

      forkJoin([restaurant, menus]).subscribe((results) => {
        this.restaurant = results[0];
        this.menus = results[1];
        this.getRatings();
        this.initCategories();
      });
    });
  }

  private initCategories(): void {
    this.menus.forEach((x) => {
      this.sections.push(
        this.fb.group({
          id: [x.category.id],
          title: [x.category.name, [Validators.required, Validators.maxLength(20)]],
          products: this.initMenus(x.menu),
        })
      );
    });
  }

  private initMenus(products: Menu[]): FormArray {
    const formArray = new FormArray([]);

    products.forEach((x) => {
      formArray.push(
        this.fb.group({
          id: [x.id],
          name: [x.product.name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
          imageUrl: [x.product.image_product[0].image.url],
          price: [x.product.price[0].amount, [Validators.required, Validators.min(100), Validators.max(100000)]],
          description: [
            x.product.description,
            [Validators.required, Validators.minLength(10), Validators.maxLength(200)],
          ],
          quantity: [0],
        })
      );
    });

    return formArray;
  }

  private getRatings(): void {
    if (this.restaurant && this.restaurant?.id > 0) {
      const rating = Math.round(this.restaurant?.rating);
      this.ratingsArray = new Array(rating);
      this.noRatingsArray = new Array(5 - this.ratingsArray.length);
    }
  }
}
