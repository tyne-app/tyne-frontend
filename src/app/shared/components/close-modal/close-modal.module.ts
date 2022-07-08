import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { CloseModalComponent } from "./close-modal.component";

@NgModule({
  declarations: [CloseModalComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [CloseModalComponent],
})
export class CloseModalModule {}
