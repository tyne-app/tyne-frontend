import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileService } from 'src/app/shared/services/application/file.service';

@Component({
  selector: 'app-business-menus',
  templateUrl: './business-menus.component.html',
  styleUrls: ['./business-menus.component.scss']
})
export class BusinessMenusComponent implements OnInit {

  public form: FormGroup;
  public panelOpenState = true;

  constructor(
    private fb: FormBuilder,
    private fileService: FileService
  ) { }

  get sections() {
    return this.form.controls["sections"] as FormArray;
  }

  ngOnInit() {
    this.initForm();
  }

  public saveChanges() {
    // console.log(this.form);
  }

  public dropSection(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sections.controls, event.previousIndex, event.currentIndex);

    for (let index = 0; index < this.sections.controls.length; index++) {
      this.sections.controls[index].get("id").setValue(index + 1);
    }
  }

  public addSection() {
    this.sections.push(this.fb.group({
      id: ['0'],
      title: ["Nueva Sección", Validators.required],
      isTitleVisible: [false],
      products: this.addDefaultProduct()
    }));

    for (let index = 0; index < this.sections.controls.length; index++) {
      this.sections.controls[index].get("id").setValue(index + 1);
    }
  }

  public deleteSection(id: number) {
    this.sections.removeAt(id);

    for (let index = 0; index < this.sections.controls.length; index++) {
      this.sections.controls[index].get("id").setValue(index + 1);
    }
  }

  public addProduct(seccionId: number) {

    let products = this.sections.controls[seccionId].get("products") as FormArray;
    products = products ? products : new FormArray([]);

    products.push(this.fb.group({
      id: ['0'],
      name: ['Nombre del Producto', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      imageUrl: ['../../../../../assets/alternate-photo.png'],
      price: ['0', [Validators.required, Validators.min(100), Validators.max(100000)]],
      description: ['Ingresa una descripción', [Validators.required, Validators.maxLength(200)]]
    }));
  }

  public deleteProduct(seccionId: number, productId: number) {
    const section = this.sections.controls[seccionId];

    if (section) {
      const products = section.get("products") as FormArray;

      products.removeAt(productId);
    }
  }

  public products(form: any) {
    return form.controls.products ? form.controls.products.controls : new FormArray([]);
  }

  public changeSectionTitleEditing(seccionId: number) {

    const title = this.sections.controls[seccionId].get("title");

    if (!title.errors) {
      const isTitleVisible = this.sections.controls[seccionId].get("isTitleVisible");
      isTitleVisible.setValue(!isTitleVisible.value);
    }
  }

  public isTitleVisible(seccionId: number): boolean {
    const isTitleVisible = this.sections.controls[seccionId].get("isTitleVisible");
    return isTitleVisible ? isTitleVisible.value : false;
  }

  public uploadImage(seccionId: number, productId: number, event: any) {

    const products = this.sections.controls[seccionId].get("products") as FormArray;
    const imageUrl = products.controls[productId].get("imageUrl");

    if (imageUrl) {
      const file: File = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = () => {
        this.fileService.compressImage(reader.result, 400, 250).then(compressed => {
          console.log(compressed);
          imageUrl.setValue(compressed)
        });
      };
    }
  }

  private getDataMock() {
    return [
      {
        id: 1,
        title: 'Entrada',
        isTitleVisible: false,
        products: [{
          id: 1,
          name: 'Carne al jugo',
          imageUrl: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg',
          price: '4500',
          description: 'Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo'
        },
        {
          id: 2,
          name: 'item 2',
          description: 'Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo',
          imageUrl: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg',
          price: '4500',
        }]
      },
      {
        id: 2,
        title: 'Almuerzo',
        isTitleVisible: false,
        products: [{
          id: 1,
          name: 'item 1',
          description: 'Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo',
          imageUrl: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg',
          price: '4500',
        }]
      },
      {
        id: 3,
        title: 'Postres',
        isTitleVisible: false,
        products: [{
          id: 1,
          name: 'item 1',
          description: 'Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo',
          imageUrl: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg',
          price: '4500',
        }]
      },
      {
        id: 4,
        title: 'Bebidas',
        isTitleVisible: false,
        products: [{
          id: 1,
          name: 'item 1',
          description: 'Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo Sabrosa carne al jugo',
          imageUrl: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg',
          price: '4500',
        }]
      },
    ]
  }

  private initForm() {
    this.form = this.fb.group({
      sections: this.fb.array([])
    });

    this.getDataMock().forEach(x => {
      this.sections.push(this.fb.group({
        id: [x.id],
        title: [x.title, [Validators.required, Validators.maxLength(20)]],
        isTitleVisible: [false],
        products: this.initProducts(x.products)
      }));
    });
  }

  private initProducts(products: any): FormArray {
    const formArray = new FormArray([]);

    products.forEach(x => {
      formArray.push(this.fb.group({
        id: [x.id],
        name: [x.name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        imageUrl: [x.imageUrl],
        price: [x.price, [Validators.required, Validators.min(100), Validators.max(100000)]],
        description: [x.description, [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      }))
    })

    return formArray;
  }

  private addDefaultProduct() {
    const formArray = new FormArray([]);

    formArray.push(this.fb.group({
      id: ['0'],
      name: ['Nombre del Producto', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      imageUrl: ['../../../../../assets/alternate-photo.png'],
      price: ['0', [Validators.required, Validators.min(100), Validators.max(100000)]],
      description: ['Ingresa una descripción', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
    }));

    return formArray;
  }

  private compressImage(src, newX, newY) {
    return new Promise((res, rej) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        const elem = document.createElement('canvas');
        elem.width = newX;
        elem.height = newY;
        const ctx = elem.getContext('2d');
        ctx.drawImage(img, 0, 0, newX, newY);
        const data = ctx.canvas.toDataURL();
        res(data);
      }
      img.onerror = error => rej(error);
    })
  }

  public getProductNameError(seccionId: number, productId: number) {
    const products = this.sections.controls[seccionId].get("products") as FormArray;
    const control = products.controls[productId].get("name");

    return control.hasError("required") ? "Debe ingresar un nombre" :
      control.hasError("minlength") ? "Debe tener mínimo 3 caracteres" :
        control.hasError("maxlength") ? "Debe tener máximo 50 caracteres" : null
  }

  public getProductPriceError(seccionId: number, productId: number) {
    const products = this.sections.controls[seccionId].get("products") as FormArray;
    const control = products.controls[productId].get("price");

    return control.hasError("required") ? "Debe ingresar un precio" :
      control.hasError("min") ? "El valor mínimo es de $100" :
        control.hasError("max") ? "El valor máximo es $100.000" : null
  }

  public getProductDescriptionError(seccionId: number, productId: number) {
    const products = this.sections.controls[seccionId].get("products") as FormArray;
    const control = products.controls[productId].get("description");

    return control.hasError("required") ? "Debe ingresar una descripción" :
      control.hasError("minlength") ? "Debe tener mínimo 10 caracteres" :
        control.hasError("maxlength") ? "Debe tener máximo 200 caracteres" : null
  }
}