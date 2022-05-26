import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { CloseModalModule } from "@app/shared/components";
import { BusinessProfileEditWorkDaysComponent } from "./business-profile-edit-work-days.component";

@NgModule({
  imports: [CommonModule, CloseModalModule, MatSlideToggleModule, FormsModule, ReactiveFormsModule, MatInputModule],
  declarations: [BusinessProfileEditWorkDaysComponent],
  exports: [BusinessProfileEditWorkDaysComponent],
})
export class BusinessProfileEditWorkDaysModule {}
