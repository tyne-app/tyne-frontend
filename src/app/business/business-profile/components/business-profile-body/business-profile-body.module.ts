import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { AcceptPetModule } from "@app/shared/components";
import { BusinessProfileBodyComponent } from "./business-profile-body.component";

@NgModule({
  imports: [CommonModule, MatCardModule, MatDialogModule, AcceptPetModule, MatButtonModule],
  declarations: [BusinessProfileBodyComponent],
  exports: [BusinessProfileBodyComponent],
})
export class BusinessProfileBodyModule {}
