import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { ButtonsModule } from "@app/shared/controls/customs/buttons/buttons.module";
import { ExitFormComponent } from "./exit-form.component";

@NgModule({
  imports: [CommonModule, ButtonsModule, MatButtonModule, MatDialogModule],
  declarations: [ExitFormComponent],
  exports: [ExitFormComponent],
})
export class ExitFormModule {}
