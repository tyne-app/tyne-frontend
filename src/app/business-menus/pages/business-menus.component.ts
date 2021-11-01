/** ANGULAR */
import { Component, OnInit } from "@angular/core";
import {Form, FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Data } from "@angular/router";
/** SERVICES */
import { FileService } from "@app/core/helpers/file.service";
import {MenuData, RangoPrecio, Section} from "@app/core/services/menus/menu-response";
import { MenuService } from "@app/core/services/menus/menu.service";
/** INMUTABLES */
import { Categories } from "@app/shared/inmutable/constants/category-kind";
import {Category,Menu, MenuAdd, Product} from "@app/core/services/menus/menu-add";
import {Commision} from "@shared/inmutable/constants/amount";
import {DialogService} from "@shared/components/components/dialog/services/dialog.service";
import {updateMenu} from "@shared/inmutable/constants/dialog-messages";
@Component({
  selector: "app-business-menus",
  templateUrl: "./business-menus.component.html",
  styleUrls: ["./business-menus.component.scss"],
})
export class BusinessMenusComponent implements OnInit {

  public menuForm: FormGroup;
  public panelOpenState = true;

  public section: Section[] = [];
  public menuData: MenuData;
  public menu: Data;
  public localName: string;
  public localRangePrice: RangoPrecio;


  public constructor(
    public formBuilder: FormBuilder,
    private fileService: FileService,
    private menuService:MenuService,
    private dialogService: DialogService
  ) {}

  public get sections(): FormArray {
    return this.menuForm.controls["sections"] as FormArray;
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public saveChanges(): void {
    if(this.menuForm.valid){
      const branchId: number = 2;
      let menus: Menu[] = [];
      const productsToAdd: Product[] = [];
      const sections:FormArray = this.sections;

      sections.controls.forEach((section)=>{
         const products:FormArray =  section.get('products') as FormArray;
         products.controls.forEach(product=>{
           const productToAdd: Product = {
             name: product.get('name').value,
             description: product.get('description').value,
             amount: product.get('price').value,
             commission_tyne: Commision,
             url_image: ''
           }
           productsToAdd.push(productToAdd);
         });

         let menu: Menu = {
           category: {
             id : section.get('id').value,
             name: section.get('title').value
           },
           products: productsToAdd
         }
         menus.push(menu);
      })

      let menuAdd: MenuAdd = {
        menu: menus
      }

      this.menuService.createMenuByBranch( branchId, menuAdd ).subscribe((res)=>{
        this.dialogService.openDialog(updateMenu);
     });
    }
  }

  public addProduct(sectionId: number): void {
    let products = this.sections.controls[sectionId].get(
      "products"
    ) as FormArray;
    products = products ? products : new FormArray([]);

    products.push(
      this.formBuilder.group({
        id: ["0"],
        name: [
          "Nombre del Producto",
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50),
          ],
        ],
        price: [
          "0",
          [Validators.required, Validators.min(100), Validators.max(100000)],
        ],
        description: [
          "Ingresa una descripción",
          [Validators.required, Validators.maxLength(200)],
        ],
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
    return section.controls.products
      ? section.controls.products.controls
      : new FormArray([]);
  }

  public isTitleVisible(sectionId: number): boolean {
    const isTitleVisible =
      this.sections.controls[sectionId].get("isTitleVisible");
    return isTitleVisible ? isTitleVisible.value : false;
  }


  private getDataMock() {
    return [
      {
        id: 1,
        title: "Entrada",
        isTitleVisible: false,
        products: [
          {
            id: 1,
            name: "Carne al jugo",
            price: "4500",
            description:
              "Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo",
          },
          {
            id: 2,
            name: "item 2",
            description:
              "Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo",
            price: "4500",
          },
        ],
      },
      {
        id: 2,
        title: "Almuerzo",
        isTitleVisible: false,
        products: [
          {
            id: 1,
            name: "item 1",
            description:
              "Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo",
            price: "4500",
          },
        ],
      },
      {
        id: 3,
        title: "Postres",
        isTitleVisible: false,
        products: [
          {
            id: 1,
            name: "item 1",
            description:
              "Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo",
            price: "4500",
          },
        ],
      },
      {
        id: 4,
        title: "Bebidas",
        isTitleVisible: false,
        products: [
          {
            id: 1,
            name: "item 1",
            description:
              "Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo",
            price: "4500",
          },
        ],
      },
    ];
  }

  private initForm() {
    this.menuForm = this.formBuilder.group({
      sections: this.formBuilder.array([]),
    });
    this.getMenusByBranchAndBuildSections();
  }

  private getMenusByBranchAndBuildSections(){
    this.menuService.getMenusByBranch(2).subscribe(res=>{
      this.menuData = res;
      this.menu = res.data;
      this.section = res.data.sections;
      this.localName = res.data.nombre_local;
      this.localRangePrice = res.data.rango_precio;
      this.buildSections();
    });
  }

  private buildSections(){
    this.section.forEach((x) => {
      this.sections.push(
        this.formBuilder.group({
          id: [x.category.id],
          title: [x.category.name, [Validators.required, Validators.maxLength(20)]],
          isTitleVisible: [false],
          products: this.initProducts(x.products),
        })
      );
    });
  }

  private initProducts(products: any): FormArray {
    const formArray = new FormArray([]);

    products.forEach((x) => {
      formArray.push(
        this.formBuilder.group({
          id: [x.id],
          name: [
            x.name,
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(50),
            ],
          ],
          price: [
            x.amount,
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
        })
      );
    });

    return formArray;
  }

  private addDefaultProduct() {
    const formArray = new FormArray([]);

    formArray.push(
      this.formBuilder.group({
        id: ["0"],
        name: [
          "Nombre del Producto",
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50),
          ],
        ],
        imageUrl: ["../../../../../assets/alternate-photo.png"],
        price: [
          "0",
          [Validators.required, Validators.min(100), Validators.max(100000)],
        ],
        description: [
          "Ingresa una descripción",
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(200),
          ],
        ],
      })
    );

    return formArray;
  }

  public getProductNameError(sectionId: number, productId: number): string {
    const products = this.sections.controls[sectionId].get(
      "products"
    ) as FormArray;
    const control = products.controls[productId].get("name");

    return control.hasError("required")
      ? "Debe ingresar un nombre"
      : control.hasError("minlength")
      ? "Debe tener mínimo 3 caracteres"
      : control.hasError("maxlength")
      ? "Debe tener máximo 50 caracteres"
      : null;
  }

  public getProductPriceError(sectionId: number, productId: number): string {
    const products = this.sections.controls[sectionId].get(
      "products"
    ) as FormArray;
    const control = products.controls[productId].get("price");

    return control.hasError("required")
      ? "Debe ingresar un precio"
      : control.hasError("min")
      ? "El valor mínimo es de $100"
      : control.hasError("max")
      ? "El valor máximo es $100.000"
      : null;
  }

  public getProductDescriptionError(
    sectionId: number,
    productId: number
  ): string {
    const products = this.sections.controls[sectionId].get(
      "products"
    ) as FormArray;
    const control = products.controls[productId].get("description");

    return control.hasError("required")
      ? "Debe ingresar una descripción"
      : control.hasError("minlength")
      ? "Debe tener mínimo 10 caracteres"
      : control.hasError("maxlength")
      ? "Debe tener máximo 200 caracteres"
      : null;
  }
}
