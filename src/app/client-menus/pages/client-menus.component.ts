import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { BusinessDetailsResponse } from "src/app/business-details/models/business-details-response";
import { CreateReservationComponent } from "src/app/create-reservation/pages/create-reservation.component";
import { MenuService } from "src/app/shared/services/menus/menu.service";
import { RestaurantService } from "src/app/shared/services/restaurant.service";

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
    });
  }

  public products(form: any): FormArray {
    return form.controls.products
      ? form.controls.products.controls
      : new FormArray([]);
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
      const index = this.cart.findIndex(
        (x) => x.get("id").value === product.get("id").value
      );
      this.cart.splice(index, 1);
      this.updateTotal();
    }
  }

  private updateTotal() {
    this.total = this.cart.reduce(
      (sum, current) => sum + +current.get("price").value,
      0
    );
  }

  private getDataMock() {
    return [
      {
        id: 1,
        title: "Entrada",
        products: [
          {
            id: 1,
            name: "Carne al jugo",
            imageUrl:
              "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg",
            price: "4500",
            description:
              "Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo",
            quantity: 0,
          },
          {
            id: 2,
            name: "item 2",
            description:
              "Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo",
            imageUrl:
              "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg",
            price: "4500",
            quantity: 0,
          },
        ],
      },
      {
        id: 2,
        title: "Almuerzo",
        products: [
          {
            id: 3,
            name: "item 1",
            description:
              "Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo",
            imageUrl:
              "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg",
            price: "4500",
            quantity: 0,
          },
        ],
      },
      {
        id: 3,
        title: "Postres",
        products: [
          {
            id: 4,
            name: "item 1",
            description:
              "Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo",
            imageUrl:
              "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg",
            price: "4500",
            quantity: 0,
          },
        ],
      },
      {
        id: 4,
        title: "Bebidas",
        products: [
          {
            id: 5,
            name: "item 1",
            description:
              "Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo",
            imageUrl:
              "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg",
            price: "4500",
            quantity: 0,
          },
        ],
      },
    ];
  }

  private initForm() {
    this.form = this.fb.group({
      sections: this.fb.array([]),
    });

    this.getDataMock().forEach((x) => {
      this.sections.push(
        this.fb.group({
          id: [x.id],
          title: [x.title, [Validators.required, Validators.maxLength(20)]],
          products: this.initProducts(x.products),
        })
      );
    });
  }

  private initProducts(products: any): FormArray {
    const formArray = new FormArray([]);

    products.forEach((x) => {
      formArray.push(
        this.fb.group({
          id: [x.id],
          name: [
            x.name,
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(50),
            ],
          ],
          imageUrl: [x.imageUrl],
          price: [
            x.price,
            [Validators.required, Validators.min(100), Validators.max(100000)],
          ],
          description: [
            x.description,
            [
              Validators.required,
              Validators.minLength(10),
              Validators.maxLength(200),
            ],
          ],
          quantity: [x.quantity],
        })
      );
    });

    return formArray;
  }

  private getData(): void {
    this.activatedRoute.queryParams.subscribe((x) => {
      this.restaurantService.getRestaurant(x.id).subscribe((response) => {
        this.restaurant = response;
        this.getRatings();
      });
    });
  }

  private getRatings(): void {
    if (this.restaurant && this.restaurant?.id > 0) {
      const rating = Math.round(this.restaurant?.rating);
      this.ratingsArray = new Array(rating);
      this.noRatingsArray = new Array(5 - this.ratingsArray.length);
    }
  }
}
