import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { DialogModel } from "../models/dialog-model";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent implements OnInit {
  public constructor(
    private router: Router,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModel
  ) {}
  public ngOnInit(): void {}

  public action(): void {
    if (this.data.isSuccessful) {
      if (this.data.redirectTo) {
        // this.router.navigate(["/" + this.data.redirectTo]);
      }
    }

    this.dialogRef.close();
  }
}
