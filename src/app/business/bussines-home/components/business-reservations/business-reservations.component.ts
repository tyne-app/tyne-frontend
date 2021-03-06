import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { LocalReservationsResponse } from "@app/business/shared/interfaces/local-reservations-response";
import { BusinessService } from "@app/business/shared/services/business.service";
import { ReservationService } from "@app/core/services/reservation.service";
import { ScheduleService } from "@app/shared/helpers/schedule.service";
import { RestaurantAccount } from "@app/shared/interfaces/restaurant/restaurant-account";
import { BusinessReservationsDetailsComponent } from "../business-reservations-details/business-reservations-details.component";

@Component({
  selector: "app-business-reservations",
  templateUrl: "./business-reservations.component.html",
  styleUrls: ["./business-reservations.component.scss"],
})
export class BusinessReservationsComponent implements OnInit {
  public MonthYear = "";
  public Month = 0;
  public Year = 0;
  public form: FormGroup;
  public typesReservation: Array<any> = [];
  public reservations: LocalReservationsResponse;
  public restaurant: RestaurantAccount;
  public typeReservationDefault = 0;
  public customCollapsedHeight = "";
  public customExpandedHeight = "";
  public resultForPage = 5;
  public page = 1;

  @ViewChild("paginator")
  public paginator: MatPaginator;

  public constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private reservationService: ReservationService,
    private BusinessService: BusinessService,
    private scheduleService: ScheduleService
  ) {}

  public ngOnInit(): void {
    this.initForm();
    this.getBranch();
    this.getMonthYear("");
    this.getTypeReservation();
    this.customCollapsedHeight = "100px";
    this.customExpandedHeight = "100px";
  }

  public initForm(): void {
    this.form = this.formBuilder.group({
      typeReservation: ["", [Validators.required, Validators.min(1)]],
    });
  }

  public getBranch(): void {
    this.BusinessService.getBusinessAccount().subscribe(
      (restaurant) => {
        this.restaurant = restaurant;
      },
      (error: HttpErrorResponse) => {
        // this.loading = false;
        if (error.status === 409) {
          // this.showErrorMessage();
        } else {
          throw error;
        }
      }
    );
  }

  public getMonthYear(type: string): void {
    if (type == "") {
      const date: Date = new Date();
      this.Year = date.getFullYear();
      this.Month = date.getMonth();
    } else if (type == "N") {
      this.Month++;
      if (this.Month == 12) {
        this.Month = 0;
        this.Year++;
      }
    } else if (type == "B") {
      this.Month--;
      if (this.Month == -1) {
        this.Month = 11;
        this.Year--;
      }
    }
    this.MonthYear = this.getMonth(this.Month) + " " + this.Year;
    this.getLocalReservations(this.typeReservationDefault, this.resultForPage, this.page, 1);
  }

  public getMonth = (monthDay: number): string => this.scheduleService.getMonth(monthDay);

  public getTypeReservation(): void {
    const typesReservation = [
      { id: 0, description: "Todas las reservas", description_minimized: "" },
      { id: 4, description: "Reservas Pendientes", description_minimized: "Reserva Pendiente" },
      { id: 7, description: "Reservas Canceladas", description_minimized: "Reserva Cancelada" },
      { id: 8, description: "Reservas Confirmadas", description_minimized: "Reserva Confirmada" },
      { id: 9, description: "Reservas Atendidas", description_minimized: "Reserva Atendida" },
    ];
    this.typesReservation = typesReservation;
  }

  public getTypeReservationDescription(status_id: number): string {
    const status_description: string = this.typesReservation.find((e) => e.id === status_id).description_minimized;
    return status_description;
  }

  public getDetail(reservationId: number, paymentId: string, status_id: number): void {
    const dialogRef = this.dialog.open(BusinessReservationsDetailsComponent, {
      maxWidth: "95%",
      minWidth: "75%",
      panelClass: "local-reservation-dialog",
      data: { reservationId: reservationId, paymentId: paymentId, status_id: status_id },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        this.getMonthYear("");
      }
    });
  }

  public getLocalReservations(
    status_reservation: number,
    result_for_page: number,
    page_number: number,
    type: number
  ): void {
    this.resultForPage = 5;
    this.page = 1;
    const reservation_date: string = new Date(this.Year + "-" + (this.Month + 1)).toISOString().slice(0, 16);

    this.reservationService
      .getReservations(reservation_date, status_reservation, result_for_page, page_number)
      .subscribe(
        (reservations) => {
          this.reservations = reservations;
          if (type == 1 && Object.keys(this.reservations).length != 0) {
            setTimeout(() => ((this.paginator.pageIndex = 0), (this.resultForPage = this.paginator.pageSize)));
          }
        },
        (error: HttpErrorResponse) => {
          if (error.status === 409) {
            // this.showErrorMessage();
          } else {
            throw error;
          }
        }
      );
  }

  public getTypeReservationSelected(): void {
    const typeReservationSelected = this.form.get("typeReservation").value;
    this.typeReservationDefault = typeReservationSelected;
    this.getLocalReservations(this.typeReservationDefault, this.resultForPage, this.page, 1);
  }

  public OnPageChange(event: PageEvent): void {
    this.resultForPage = event.pageSize;
    this.page = event.pageIndex + 1;
    this.getLocalReservations(this.typeReservationDefault, this.resultForPage, this.page, 0);
  }

  public getDateReservation(dateReservation: string): string {
    dateReservation = dateReservation.replace("-", "/").replace("-", "/");
    const date: Date = new Date(dateReservation);
    const day: number = date.getDate();
    const month: number = date.getMonth();
    const dayNumber = date.getDay() == 0 ? 6 : date.getDay() - 1;

    return this.getDay(dayNumber) + " " + day + " de " + this.getMonth(month);
  }

  public getImgReservation(statusId: number): string {
    let image = "";
    if (statusId == 4) {
      image = "../../../../assets/img/reservas-pendientes.svg";
    } else if (statusId == 7) {
      image = "../../../../assets/img/reservas-canceladas.svg";
    } else if (statusId == 8) {
      image = "../../../../assets/img/reservas-confirmadas.svg";
    } else if (statusId == 9) {
      image = "../../../../assets/img/reservas-atendidas.svg";
    }
    return image;
  }

  public getDay = (dayNumber: number): string => this.scheduleService.getDay(dayNumber);
}
