import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ClientReservation } from "@app/client/shared/interfaces/client-reservation";
import { ClientService } from "@app/client/shared/services/client.service";
import { ScheduleService } from "@app/shared/helpers/schedule.service";
import { environment } from "@src/environments/environment";
import { CancelReservationComponent } from "../cancel-reservation/cancel-reservation.component";

@Component({
  selector: "app-reservation",
  templateUrl: "./reservation.component.html",
  styleUrls: ["./reservation.component.scss"],
})
export class ReservationComponent implements OnInit {
  public supportPhone = environment.supportPhone;
  public reservations: ClientReservation[] = [];

  public constructor(
    private clientService: ClientService,
    private scheduleService: ScheduleService,
    private dialog: MatDialog
  ) {}

  public ngOnInit(): void {
    this.getClientReservation();
  }

  public openCancelReservation(): void {
    const dialogRef = this.dialog.open(CancelReservationComponent, {
      minWidth: "50%",
    });

    dialogRef.afterClosed().subscribe((result) => {
      // empty
    });
  }

  public getClientReservation(): void {
    this.clientService.getClientReservations().subscribe((reservations) => {
      this.reservations = reservations;
    });
  }

  public setDate(reservationDate: string): string {
    if (reservationDate) {
      reservationDate = reservationDate.replace("-", "/").replace("-", "/");
    }
    const date: Date = new Date(reservationDate);
    const day: number = date.getDate();
    const month: number = date.getMonth() + 1;
    const year: number = date.getFullYear();
    const dayNumber = date.getDay();

    return this.getDay(dayNumber) + " " + day + "/" + month + "/" + year;
  }

  public getPeriodOfTime = (hourReservation: string): string => this.scheduleService.getPeriodOfTime(hourReservation);

  public getDay = (dayNumber: number): string => this.scheduleService.getDay(dayNumber);
}
