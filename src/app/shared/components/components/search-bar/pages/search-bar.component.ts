import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { OrderByRestaurants } from "src/app/search-restaurant/enums/order-by-restaurants.enum";
import { SortByRestaurants } from "src/app/search-restaurant/enums/sort-by-restaurants.enum";
import { SearchRestaurantRequest } from "src/app/search-restaurant/models/search-restaurant-request";
import { State } from "src/app/shared/interfaces/state";
import { RestaurantService } from "src/app/shared/services/restaurant.service";
import { TerritorialsService } from "src/app/shared/services/territorials.service";
import { DialogModel } from "../../dialog/models/dialog-model";
import { DialogService } from "../../dialog/services/dialog.service";
import { SearchBarService } from "../services/search-bar.service";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent implements OnInit {
  public form!: FormGroup;
  public minDate = new Date();
  public states: State[] = [];

  public constructor(
    private fb: FormBuilder,
    private route: Router,
    private router: ActivatedRoute,
    private restaurantService: RestaurantService,
    private territorialsService: TerritorialsService,
    private searchBarService: SearchBarService,
    private dialogService: DialogService
  ) {}

  public ngOnInit(): void {
    this.initForm();
    this.getStates();
    this.getQueryParams();
  }

  public searchRestaurants(): void {
    if (!this.isReadyToSearch()) return;
    let dateReservationParam = null;

    if (this.form.get("dateReservation").value) {
      const date = new Date(this.form.get("dateReservation").value);
      const dd = String(date.getDate()).padStart(2, "0");
      const mm = String(date.getMonth() + 1).padStart(2, "0");
      const yyyy = date.getFullYear();
      dateReservationParam = `${yyyy}/${mm}/${dd}`;
    }

    this.searchBarService.setDateReservation(dateReservationParam);

    const request: SearchRestaurantRequest = {
      name: this.form.get("name").value,
      dateReservation: dateReservationParam,
      state: this.form.get("state").value,
      sortBy: SortByRestaurants.Name,
      orderBy: OrderByRestaurants.Asc,
    };

    // TODO: aca necesitamos un endpoint que nos retorne true o false para saber si hay resultados
    this.restaurantService.getRestaurants(request).subscribe((response) => {
      this.restaurantService.restaurantsDataSource.next(response);

      if (response && response.length > 0) {
        this.route.navigate(["buscar-locales"], {
          queryParams: {
            name: request.name,
            dateReservation: request.dateReservation,
            state: request.state,
            sortBy: request.sortBy,
            orderBy: request.orderBy,
          },
        });
      } else {
        this.showNotResults();
      }
    });
  }

  public getStates(): void {
    this.territorialsService.getStates(13).subscribe((states) => {
      this.states = states;
    });
  }

  public isReadyToSearch(): boolean {
    if (
      !this.form.get("name").value &&
      !this.form.get("dateReservation").value &&
      (!this.form.get("state").value || this.form.get("state").value === "0")
    ) {
      this.form.get("name").setErrors({ required: true });
      this.form.get("dateReservation").setErrors({ required: true });
      this.form.get("state").setErrors({ required: true });

      return false;
    } else if (
      this.form.get("name").hasError("minlength") ||
      this.form.get("dateReservation").hasError("invalidDate")
    ) {
      return false;
    }

    return true;
  }

  public nameErrorMessage(): string {
    return this.form.get("name").hasError("minlength")
      ? "Debe tener mínimo 3 caracteres"
      : this.form.get("name").hasError("required")
      ? "Debe ingresar un nombre"
      : null;
  }

  public dateReservationErrorMessage(): string {
    return this.form.get("dateReservation").hasError("required")
      ? "Debe ingresar una fecha válida"
      : this.form.get("dateReservation").hasError("invalidDate")
      ? "Debe ser igual o mayor a hoy"
      : this.form.get("dateReservation").hasError("matDatepickerParse")
      ? "Debe ingresar una fecha válida"
      : null;
  }

  public stateErrorMessage(): string {
    return this.form.get("state").hasError("required")
      ? "Debe seleccionar una comuna"
      : this.form.get("state").hasError("min")
      ? "Debe seleccionar una comuna"
      : null;
  }

  private initForm() {
    this.form = this.fb.group({
      name: ["", [Validators.minLength(3)]],
      dateReservation: ["", [this.dateValidator]],
      state: [""],
    });
  }

  private getQueryParams() {
    this.router.queryParams.subscribe((x) => {
      this.form.get("name").setValue(x.name);
      this.form
        .get("dateReservation")
        .setValue(x.dateReservation ? new Date(x.dateReservation) : null);
      this.form.get("state").setValue(x.state != null ? Number(x.state) : 0);
      this.searchBarService.setDateReservation(x.dateReservation);
    });
  }

  private dateValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value) {
      const date = new Date(control.value).setHours(0, 0, 0, 0);
      const today = new Date().setHours(0, 0, 0, 0);

      if (date < today) {
        return { invalidDate: true };
      }
    }

    return null;
  }

  private showNotResults() {
    const dialog: DialogModel = {
      isSuccessful: false,
      messageButton: "Aceptar",
      title: "¡Lo sentimos!",
      subtitle: "No existen resultados para la búsqueda",
    };

    this.dialogService.openDialog(dialog);
  }
}
