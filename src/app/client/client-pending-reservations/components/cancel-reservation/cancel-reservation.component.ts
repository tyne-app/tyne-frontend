import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-cancel-reservation",
  templateUrl: "./cancel-reservation.component.html",
  styleUrls: ["./cancel-reservation.component.scss"],
})
export class CancelReservationComponent implements OnInit {
  public constructor(public modal: MatDialogRef<CancelReservationComponent>) {}

  public ngOnInit(): void {}

  public cancelReservation(): void {
    //
  }

  public close(): void {
    this.modal.close();
  }
}
