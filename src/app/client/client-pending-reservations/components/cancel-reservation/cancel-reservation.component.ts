import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ClientService } from "@app/client/shared/services/client.service";
import { DialogService } from "@app/shared/components/dialog/shared/services/dialog.service";

@Component({
  selector: "app-cancel-reservation",
  templateUrl: "./cancel-reservation.component.html",
  styleUrls: ["./cancel-reservation.component.scss"],
})
export class CancelReservationComponent implements OnInit {
  public constructor(
    @Inject(MAT_DIALOG_DATA) public reservationId: number,
    private clientService: ClientService,
    public modal: MatDialogRef<CancelReservationComponent>,
    private dialogService: DialogService
  ) {}

  public ngOnInit(): void {}

  public cancelReservation(): void {
    this.clientService.cancelReservation({ reservation_id: this.reservationId }).subscribe(
      (_) => {
        this.dialogService.openDialogReloadCurrentPage({
          isSuccessful: true,
          title: "Reserva cancelada",
          subtitle: "Su reserva ha sido cancelada exitosamente",
          messageButton: "Aceptar",
        });
        this.close();
      },
      (error) => {
        this.dialogService.openDialog({
          isSuccessful: false,
          title: "Ha ocurrido un error",
          subtitle: error.error.name,
          messageButton: "Aceptar",
        });
        this.close();
      }
    );
  }

  public close(): void {
    this.modal.close();
  }
}
