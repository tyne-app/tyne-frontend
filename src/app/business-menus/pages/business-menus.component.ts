/** ANGULAR */
import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Data } from "@angular/router";
/** SERVICES */
import { FileService } from "@app/core/helpers/file.service";
import { MenuData, Section } from "@app/core/services/menus/menu-response";
import { MenuService } from "@app/core/services/menus/menu.service";
/** INMUTABLES */
import { Categories } from "@app/shared/inmutable/constants/category-kind";
@Component({
  selector: "app-business-menus",
  templateUrl: "./business-menus.component.html",
  styleUrls: ["./business-menus.component.scss"],
})
export class BusinessMenusComponent implements OnInit {
  
  public sectionForm: FormGroup;
  public panelOpenState = true;

  public section: Section[] = [];
  public menuData: MenuData;
  public menu: Data; 
  

  public constructor(
    public menuForm: FormBuilder,
    private fileService: FileService,
    private menuService:MenuService 
  ) {}

  public get sections(): FormArray {
    return this.sectionForm.controls["sections"] as FormArray;
  }

  public ngOnInit(): void {

    this.initForm();
  }

  
  public saveChanges(): void {
    // console.log(this.sectionForm);
  }

  public addProduct(sectionId: number): void {
    console.log(sectionId);
    if(Categories.has(sectionId)){
      const sec = Categories.get(sectionId);
      console.log(sec);
    }
    let products = this.sections.controls[sectionId].get(
      "products"
    ) as FormArray;
    products = products ? products : new FormArray([]);

    products?.push(
      this.menuForm.group({
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
    
    
    
    // this.menuService.createMenuByBranch(2,).subscribe(()=>{
      
    // });

  }

  public deleteProduct(sectionId: number, productId: number): void {
    const section = this.sections.controls[sectionId];

    if (section) {
      const products = section.get("products") as FormArray;

      products.removeAt(productId);
    }
  }

  public products(sectionForm: any): FormArray {
    return sectionForm.controls.products
      ? sectionForm.controls.products.controls
      : new FormArray([]);
  }

  public changeSectionTitleEditing(sectionId: number): void {
    const title = this.sections.controls[sectionId].get("title");
    if (!title.errors) {
      const isTitleVisible =
        this.sections.controls[sectionId].get("isTitleVisible");
      isTitleVisible.setValue(!isTitleVisible.value);
    }
  }

  public isTitleVisible(sectionId: number): boolean {
    const isTitleVisible =
      this.sections.controls[sectionId].get("isTitleVisible");
    return isTitleVisible ? isTitleVisible.value : false;
  }

  private getData(){
    
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
    this.sectionForm = this.menuForm.group({
      sections: this.menuForm.array([]),
    });
    this.getMenusByBranchAndBuildSections();
  }

  private getMenusByBranchAndBuildSections(){
    this.menuService.getMenusByBranch(2).subscribe(res=>{
      this.menuData = res;
      this.menu = res.data;
      this.section = res.data.sections;  
      this.buildSections();             
    });
  }

  private buildSections(){
    this.section?.forEach((x) => {
      this.sections.push(
        this.menuForm.group({
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
        this.menuForm.group({
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
      this.menuForm.group({
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

  private compressImage(src, newX, newY) {
    return new Promise((res, rej) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        const elem = document.createElement("canvas");
        elem.width = newX;
        elem.height = newY;
        const ctx = elem.getContext("2d");
        ctx.drawImage(img, 0, 0, newX, newY);
        const data = ctx.canvas.toDataURL();
        res(data);
      };
      img.onerror = (error) => rej(error);
    });
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
