import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancelPayComponent } from './cancel-pay.component';
import { ButtonsModule } from '@app/shared/controls/customs/buttons/buttons.module';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  imports: [
    CommonModule,
    ButtonsModule,
    RouterModule,
    MatCardModule
  ],
  declarations: [CancelPayComponent],
  exports: [CancelPayComponent]
})
export class CancelPayModule { }
