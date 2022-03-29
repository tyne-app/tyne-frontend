import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessProfileEditWorkDaysComponent } from './business-profile-edit-work-days.component';
import { CloseModalModule } from '@app/shared/components';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  imports: [
    CommonModule,
    CloseModalModule,
    MatSlideToggleModule
  ],
  declarations: [BusinessProfileEditWorkDaysComponent],
  exports: [BusinessProfileEditWorkDaysComponent]
})
export class BusinessProfileEditWorkDaysModule { }
