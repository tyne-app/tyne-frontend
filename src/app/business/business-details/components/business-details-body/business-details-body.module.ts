import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { AcceptPetModule, MapModule } from "@app/shared/components";
import { ButtonsModule } from "@app/shared/controls/customs/buttons/buttons.module";
import { SharedModule } from "@app/shared/shared.module";
import { BusinessDetailsBodyComponent } from "./business-details-body.component";

@NgModule({
  declarations: [BusinessDetailsBodyComponent],
  imports: [
    CommonModule,
    ButtonsModule,
    AcceptPetModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MapModule,
    SharedModule,
  ],
  exports: [BusinessDetailsBodyComponent],
})
export class BusinessDetailsBodyModule {}
