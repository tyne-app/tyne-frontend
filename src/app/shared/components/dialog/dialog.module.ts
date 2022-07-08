import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { CloseModalModule } from "../close-modal/close-modal.module";
import { DialogComponent } from "./dialog.component";

@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule, CloseModalModule, MatButtonModule],
  exports: [DialogComponent],
})
export class DialogModule {}
