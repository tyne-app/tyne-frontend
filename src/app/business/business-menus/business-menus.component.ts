/** ANGULAR */
import { Location } from '@angular/common';
import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MenuService } from "@app/core/services/menu.service";
import { Commission } from "@shared/inmutable/constants/amount";
import { updateMenu } from "@app/shared/components/dialog/shared/inmutable/constants/dialog-message";
import { FormControlService, RatingService } from '@app/shared/helpers';
import { DialogService } from '@app/shared/components/dialog/shared/services/dialog.service';
import { Section } from './interfaces/section';
import { RangoPrecio } from './interfaces/price-range';
import { CreateMenuDto, Menu } from './interfaces/create-menu-dto';
import { CreateProduct } from './interfaces/product';
import { TokenService } from '@app/auth/shared/helpers/token.service';



@Component({
  selector: "app-business-menus",
  templateUrl: "./business-menus.component.html",
  styleUrls: ["./business-menus.component.scss"],
})
export class BusinessMenusComponent implements OnInit {
  public menuForm: FormGroup;
  public panelOpenState = true;
  public branchId = 2;

  public section: Section[] = [];
  public localName: string;
  public localRangePrice: RangoPrecio;
  public localRatingColor: Array<number> = [];
  public localRatingWhite: Array<number> = [];
  public localCommission: string = Commission;

  public constructor(
    public formBuilder: FormBuilder,
    private menuService: MenuService,
    private dialogService: DialogService,
    private location: Location,
    private tokenService: TokenService,
    private ratingService: RatingService,
    private formControlService: FormControlService
  ) {}

  public get sections(): FormArray {
    return this.menuForm.controls["sections"] as FormArray;
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public saveChanges(): void {
    if (!this.menuForm.invalid) {

      const menus: Menu[] = [];
      const productsToAdd = [];
      const sections:FormArray = this.sections;

      sections.controls.forEach((section)=>{
         const products:FormArray = section.get('products') as FormArray;
         products.controls.forEach(product=>{
           const productToAdd: CreateProduct = {
             name: product.get('name').value,
             description: product.get('description').value,
             amount: product.get('price').value,
             url_image: ''
           };
           productsToAdd.push({
             category: section.get('id').value,
             productToAdd: productToAdd
           });
         });

         const menu: Menu = {
          category_id: section.get('id').value,
          products: []
        };
         menus.push(menu);
      });

      menus.forEach(menu => {
        productsToAdd.forEach(product => {
          if(product.category == menu.category_id) {
            menu.products.push(product.productToAdd);
          }
        });
      });

      const menuAdd: CreateMenuDto = {
        menu: menus,
      };

      this.menuService.createMenuByBranch(menuAdd).subscribe(() => {
        this.dialogService.openDialog(updateMenu);
      });
    }else{
      // TODO: ADD MESSAGE
    }
  }

  public addProduct(sectionId: number): void {
    let products = this.sections.controls[sectionId].get("products") as FormArray;
    products = products ? products : new FormArray([]);

    products.push(
      this.formBuilder.group({
        id: ["0"],
        name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        price: ["", [Validators.required, Validators.min(100), Validators.max(100000)]],
        description: ["", [Validators.required, Validators.min(10), Validators.maxLength(200)]],
      })
    );
  }

  public deleteProduct(sectionId: number, productId: number): void {
    const section = this.sections.controls[sectionId];
  
    if (section) {
      const products = section.get("products") as FormArray;

      products.removeAt(productId);
    }
  }

  public products(section: any): FormArray {
    return section.controls.products ? section.controls.products.controls : new FormArray([]);
  }

  public isTitleVisible(sectionId: number): boolean {
    const isTitleVisible = this.sections.controls[sectionId].get("isTitleVisible");
    return isTitleVisible ? isTitleVisible.value : false;
  }

  private buildBottom(): Section {
    return {
      category: {
        id: 85,
        name: "Entradas",
      },    
      products: [],
    };
  }

  private buildLunch(): Section {
    return {
      category: {
        id: 86,
        name: "Fondos",
      },    
      products: [],
    };
  }

  private buildDesserts(): Section {
    return {
      category: {
        id: 89,
        name: "Postres",
      },    
      products: [],
    };
  }

  private buildDrinks(): Section {
    return {
      category: {
        id: 88,
        name: "Bebestibles",
      },    
      products: [],
    };
  }

  private buildOthers(): Section {
    return {
      category: {
        id: 84,
        name: "Otro",
      },    
      products: [],
    };
  }

  private initForm() {
    this.menuForm = this.formBuilder.group({
      sections: this.formBuilder.array([]),
    });
    this.getMenusByBranchAndBuildSections();
  }

  private getMenusByBranchAndBuildSections() {
    this.branchId = this.tokenService.getDecodedJwtToken()?.id_branch_client;
    this.menuService.getMenusByBranch(this.branchId).subscribe((menu) => {
      if (menu) {
        const { sections, rango_precio, rating, nombre_local } = menu;

        this.section = sections;
        if(!sections.some(section=>section.category.id==85)){
          this.section.push(this.buildBottom());
        }
        if(!sections.some(section=>section.category.id==86)){
          this.section.push(this.buildLunch());
        }
        if(!sections.some(section=>section.category.id==89)){
          this.section.push(this.buildDesserts());
        }
        if(!sections.some(section=>section.category.id==88)){
          this.section.push(this.buildDrinks());
        }     
        if(!sections.some(section=>section.category.id==84)){
          this.section.push(this.buildOthers());
        }

        this.localName = nombre_local;
        this.localRangePrice = rango_precio;
        this.buildRating(rating);
        this.buildSections();
      }else{
        if(!this.section.some(section=>section.category.id==85)){
          this.section.push(this.buildBottom());
        }
        if(!this.section.some(section=>section.category.id==86)){
          this.section.push(this.buildLunch());
        }
        if(!this.section.some(section=>section.category.id==89)){
          this.section.push(this.buildDesserts());
        }
        if(!this.section.some(section=>section.category.id==88)){
          this.section.push(this.buildDrinks());
        }     
        if(!this.section.some(section=>section.category.id==84)){
          this.section.push(this.buildOthers());
        }
        this.buildSections();
      }
    });
  }

  private buildRating(localRating: number) {
    this.localRatingColor = this.ratingService.countRating(localRating);
    this.localRatingWhite = this.ratingService.countNoRating(localRating);
  }

  private buildSections() {
    this.section.forEach((section) => {
      this.sections.push(
        this.formBuilder.group({
          id: [section.category.id],
          title: [section.category.name, [Validators.required, Validators.maxLength(20)]],
          isTitleVisible: [false],
          products: this.buildProducts(section.products),
        })
      );
    });
  }

  private buildProducts(products: any): FormArray {
    const formArray = new FormArray([]);

    products.forEach((product) => {
      formArray.push(
        this.formBuilder.group({
          id: [product.id],
          name: [product.name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
          price: [product.amount, [Validators.required, Validators.min(100), Validators.max(100000)]],
          description: [product.description, [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
        })
      );
    });

    return formArray;
  }

  public goToBack(): void {
    this.location.back();
  }

  public getProductNameError(sectionId: number, productId: number): string {
    const products = this.sections.controls[sectionId].get("products") as FormArray;
    const control = products.controls[productId].get("name");
    return this.formControlService.getProductNameError(control);
  }

  public getProductPriceError(sectionId: number, productId: number): string {
    const products = this.sections.controls[sectionId].get("products") as FormArray;
    const control = products.controls[productId].get("price");
    return this.formControlService.getProductPriceError(control);
  }

  public getProductDescriptionError(sectionId: number, productId: number): string {
    const products = this.sections.controls[sectionId].get("products") as FormArray;
    const control = products.controls[productId].get("description");
    return this.formControlService.getProductDescriptionError(control);
  }
}
