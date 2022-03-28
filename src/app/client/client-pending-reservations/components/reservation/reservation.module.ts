import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '@app/shared/shared.module';



@NgModule({
  declarations: [ReservationComponent],
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule
  ],
  exports: [ReservationComponent]
})
export class ReservationModule { }
