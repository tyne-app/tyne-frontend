import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { BusinessDetailsResponse } from "@app/business/business-details/interfaces/business-details-response";
import { RatingService } from "@app/shared/helpers/rating.service";
import { GetMenuDto } from "@app/business/business-menus/interfaces/get-menu-dto";
import { MenuService } from "@app/core/services/menu.service";
import { BusinessService } from "@app/business/shared/services/business.service";
import { forkJoin } from "rxjs";

import { Product as ProductAdd } from "@app/business/bussines-home/interfaces/reservation-add";
import { Product } from "@app/business/business-menus/interfaces/product";
import { ClientCreateReservationComponent } from "../client-create-reservation/client-create-reservation.component";
import { ButtonCustom } from "@app/shared/controls/customs/buttons/shared/interfaces/button-custom";



@Component({
  selector: "app-client-menus",
  templateUrl: "./client-menus.component.html",
  styleUrls: ["./client-menus.component.scss"],
})
export class ClientMenusComponent implements OnInit {

  public reservationCustomButton: ButtonCustom = {
    buttonMaterialType : "mat-raised-button",
    buttonType : "submit",
    buttonTypeClass : "btn-submit"
  }
  public menuForm: FormGroup;
  public panelOpenState = true;
  public total = 0;
  public cart: FormGroup[] = [];
  public restaurant: BusinessDetailsResponse;
  public branchId!: number; 
  public ratingsArray: number[]= [];
  public noRatingsArray: number[] = [];
  public menus: GetMenuDto;
  public auxiliar = 0;
  public localId:string;
  
  
  public get sections(): FormArray {
    return this.menuForm.controls["sections"] as FormArray;
  }

  public constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private menuService: MenuService,
    private BusinessService: BusinessService,
    private ratingService: RatingService,
  ) {}


  public ngOnInit(): void {
    this.buildMenuForm();
    this.getData();
    this.setLocalId();
  }

  public saveChanges(): void{

  }

  public setLocalId(): void{
    this.activatedRoute.queryParams.subscribe((params)=>{
      this.localId = params.id;
      localStorage.setItem("local_id", this.localId);
    });
  }


  public openReservationModal(): void {  
    const products: ProductAdd[] = [];
    this.cart.forEach((product)=>{
      const productId = product.get("id").value;
      const quantity = product.get("quantity").value;
      const createProduct:ProductAdd = {
        id: productId,
        quantity: quantity
      };
      products.push(createProduct);
    });

    this.dialog.open(ClientCreateReservationComponent, {
      maxWidth: "95%",
      minWidth: "55%",
      panelClass: "create-reservation-dialog",
      data: { total: this.total, branchId: this.branchId, products },
    });
  }

  public products(menuForm: any): FormArray {
    return menuForm.controls.products ? menuForm.controls.products.controls : new FormArray([]);
  }

  public addProduct(product: FormGroup): void {
    const control = product.get("quantity");
    let value: number = control.value;
    value++;
    if (value <= 30) {
      const index = this.cart.findIndex((x) => x.get("id").value === product.get("id").value);
      if(index==-1){
        this.cart.push(product);
        control.setValue(value);
        this.total+= +product.get("price").value;
        this.auxiliar++;
      }else{
        control.setValue(value);
        this.total+= +product.get("price").value;
      }
    }
  }

  public deleteProduct(product: FormGroup): void {
    const control = product.get("quantity");
    let value: number = control.value;
    const index = this.cart.findIndex((x) => x.get("id").value === product.get("id").value);
    if (value > 0) {
      value--;
      control.setValue(value);
      this.total-= +product.get("price").value;
      if(value <= 0){
        this.cart.splice(index, 1);
      }
    }
  }

  private buildMenuForm(): void {
    this.menuForm = this.formBuilder.group({
      sections: this.formBuilder.array([]),
    });
  }

  private getData(): void {
    this.activatedRoute.queryParams.subscribe(( params) => {
      this.branchId = params.id;
      const restaurant = this.BusinessService.getBusinessById( this.branchId); 
      const menu = this.menuService.getMenusByBranch( params.id);
      forkJoin([restaurant, menu]).subscribe((results) => {
        this.restaurant = results[0];
        this.menus = results[1];
        this.getRatings();
        this.initCategories();
      });
    });
  }

  private initCategories(): void {
    this.menus.sections.forEach((section) => {
      this.sections.push(
        this.formBuilder.group({
          id: [section.category.id],
          title: [section.category.name, [Validators.required, Validators.maxLength(20)]],
          products: this.buildProducts(section.products),
        })
      );
    });
  }

  private buildProducts(products: Product[]): FormArray {
    const productFormArray = new FormArray([]);

    products.forEach((product) => {
      productFormArray.push(
        this.formBuilder.group({
          id: [product.id],
          name: [product.name, [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],
          price: [product.amount, [Validators.required, Validators.min(100), Validators.max(100000)]],
          description: [product.description, [Validators.required, Validators.minLength(10), Validators.maxLength(400)]],
          quantity: [0],
        })
      );
    });

    return productFormArray;
  }

  private getRatings(): void {
    if (this.restaurant && this.restaurant?.id > 0) {
      const rating:number = Math.round(this.restaurant?.rating);
      this.ratingsArray = this.ratingService.countRating(rating);
      this.noRatingsArray = this.ratingService.countNoRating(rating);
    }
  }
}
