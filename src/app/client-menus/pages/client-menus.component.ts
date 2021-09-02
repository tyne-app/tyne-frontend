import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { CreateReservationComponent } from "src/app/create-reservation/pages/create-reservation.component";

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

  public constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  public get sections(): FormArray {
    return this.form.controls["sections"] as FormArray;
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public saveChanges(): void {
    // console.log(this.form);
  }

  public openReservationModal(): void {
    const dialogRef = this.dialog.open(CreateReservationComponent, {
      maxWidth: "100%",
      width: "75%",
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
        isTitleVisible: false,
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
        isTitleVisible: false,
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
        isTitleVisible: false,
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
        isTitleVisible: false,
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
}
