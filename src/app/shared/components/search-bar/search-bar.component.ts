import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { DateService } from "@app/shared/helpers/date.service";
import { BusinessService } from "@app/business/shared/services/business.service";
import { TyneRoutes } from "@app/shared/inmutable/enums/url-routes.enum";
import { State } from "@app/shared/interfaces/common/state";
import { Moment } from "moment";
import { DialogService } from "../dialog/shared/services/dialog.service";
import { SearchBarService } from "./shared/services/search-bar.service";


import { DialogModel } from "../dialog/shared/interfaces/dialog-model";
import { SortByRestaurants } from "@app/public/search-business/shared/enums/sort-by-restaurants.enum";
import { OrderByRestaurants } from "@app/public/search-business/shared/enums/order-by-restaurants.enum";
import { SearchRestaurantRequest } from "@app/public/search-business/shared/interfaces/search-restaurant-request";
import { TerritorialsService } from "@app/core/services/territorials.service";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent implements OnInit {
  public form!: FormGroup;
  public minDate: Moment | Date;
  public states: State[] = [];

  public constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activedRoute: ActivatedRoute,
    private territorialService:TerritorialsService,
    private BusinessService: BusinessService,
    private searchBarService: SearchBarService,
    private dialogService: DialogService,
    private dateService: DateService,
  ) {}

  public ngOnInit(): void {
    this.initForm();
    this.getStates();
    this.getQueryParams();
    this.setDatepickerConfig();
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
      result_for_page: 10,
      page: 1,
      name: this.form.get("name").value,
      dateReservation: dateReservationParam,
      state: this.form.get("state").value,
      sortBy: SortByRestaurants.Name,
      orderBy: OrderByRestaurants.Asc,
    };

    this.BusinessService.getBusinessFiltered(request).subscribe((response) => {
      if (response && response.data.length > 0) {
        this.router.navigate([TyneRoutes.BusinessSearchResults], {
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
    this.territorialService.getAvailableStates(7).subscribe((data)=>{
      this.states = data;
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

  public setDatepickerConfig(): void{
    const { minDate } = this.dateService.setConfigSearchBarDate();
    this.minDate = minDate;
  }

  private initForm() {
    this.form = this.formBuilder.group({
      name: ["", [Validators.minLength(3)]],
      dateReservation: ["", [this.dateValidator]],
      state: [""],
    });
  }

  private getQueryParams() {
    this.activedRoute.queryParams.subscribe((params) => {
      this.form.get("name").setValue(params.name);
      this.form.get("dateReservation").setValue(params.dateReservation ? new Date(params.dateReservation) : null);
      this.form.get("state").setValue(params.state != null ? Number(params.state) : 0);
      this.searchBarService.setDateReservation(params.dateReservation);
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
