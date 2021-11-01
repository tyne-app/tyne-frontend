import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { LocalReservationsDetailsComponent } from "../local-reservations-details/local-reservations-details.component";

@Component({
  selector: "app-local-reservations",
  templateUrl: "./local-reservations.component.html",
  styleUrls: ["./local-reservations.component.scss"],
})
export class LocalReservationsComponent implements OnInit {
  public MonthYear = "";
  public Month = 0;
  public Year = 0;
  public form: FormGroup;
  public typesReservation: Array<any> = [];
  public reservations: Array<any> = [];
  public typeReservationDefault = 0;
  public customCollapsedHeight = "";
  public customExpandedHeight = "";

  public constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  public ngOnInit(): void {
    this.getMonthYear("");
    this.getTypeReservation();
    this.initForm();
    this.getReservation();

    this.customCollapsedHeight = "100px";
    this.customExpandedHeight = "100px";
  }
  public initForm(): void {
    this.form = this.fb.group({
      typeReservation: [[Validators.required, Validators.min(1)]],
    });
  }

  public getMonthYear(type: string): void {
    const monthNames = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    if (type == "") {
      const date: Date = new Date();
      this.Month = date.getMonth();
      this.Year = date.getFullYear();
      this.MonthYear = monthNames[date.getMonth()] + " " + date.getFullYear();
    } else if (type == "N") {
      this.Month = this.Month + 2;
      if (this.Month == 13) {
        this.Month = 1;
        this.Year = this.Year + 1;
      }
      const date: Date = new Date(this.Year + "/" + this.Month);
      this.MonthYear = monthNames[date.getMonth()] + " " + date.getFullYear();
      this.Month = date.getMonth();
      this.Year = date.getFullYear();
    } else if (type == "B") {
      if (this.Month == 0) {
        this.Month = 12;
        this.Year = this.Year - 1;
      }
      const date: Date = new Date(this.Year + "/" + this.Month);
      this.MonthYear = monthNames[date.getMonth()] + " " + date.getFullYear();
      this.Month = date.getMonth();
      this.Year = date.getFullYear();
    }
  }

  public getTypeReservation(): void {
    const typesReservation = [
      { id: 0, description: "Todas las reservas" },
      { id: 1, description: "Reservas Pendientes" },
      { id: 2, description: "Reservas Confirmadas" },
      { id: 3, description: "Reservas Atendidas" },
    ];
    this.typesReservation = typesReservation;
  }

  public getReservation(): void {
    const reservations = [
      {
        date: "Lunes 01 Octubre",
        pendientes: 0,
        confirmadas: 0,
        atendidas: 1,
        detailsReservations: [
          {
            idReservation: 1,
            client: "Maria Perez",
            detail: "Reserva para 4 personas",
            hour: "13:30",
            status: 3,
            statusDescription: "Reserva Atendida",
          },
        ],
      },
      {
        date: "Sábado 02 Octubre",
        pendientes: 2,
        confirmadas: 1,
        atendidas: 0,
        detailsReservations: [
          {
            idReservation: 2,
            client: "Juan Perez",
            detail: "Reserva para 10 personas",
            hour: "15:00",
            status: 1,
            statusDescription: "Reserva Pendiente",
          },
          {
            idReservation: 3,
            client: "Mauricio Pardo",
            detail: "Reserva para 2 personas",
            hour: "18:00",
            status: 2,
            statusDescription: "Reserva Confirmada",
          },
          {
            idReservation: 4,
            client: "Cristian Mena",
            detail: "Reserva para 6 personas",
            hour: "21:00",
            status: 1,
            statusDescription: "Reserva Pendiente",
          },
        ],
      },
      {
        date: "Viernes 22 Octubre",
        pendientes: 1,
        confirmadas: 1,
        atendidas: 1,
        detailsReservations: [
          {
            idReservation: 1,
            client: "Felix Caceres",
            detail: "Reserva para 6 personas",
            hour: "10:00",
            status: 2,
            statusDescription: "Reserva Confirmada",
          },
          {
            idReservation: 1,
            client: "Tomas Carvajal",
            detail: "Reserva para 3 personas",
            hour: "13:30",
            status: 3,
            statusDescription: "Reserva Atendida",
          },
          {
            idReservation: 1,
            client: "Camila Mena",
            detail: "Reserva para 6 personas",
            hour: "10:00",
            status: 1,
            statusDescription: "Reserva Pendiente",
          },
        ],
      },
    ];
    this.reservations = reservations;
  }

  public getArrayImgReservation(quantity: number): Array<number> {
    const numbersArray: Array<number> = Array(quantity);

    return numbersArray;
  }

  public getDetail(idReservation: number): void {
    const dialogRef = this.dialog.open(LocalReservationsDetailsComponent, {
      maxWidth: "95%",
      minWidth: "75%",
      panelClass: "local-reservation-dialog",
      data: { idReservation: idReservation },
    });
    dialogRef.afterClosed().subscribe((result) => {
      // empty
    });
  }
}
