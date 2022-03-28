import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExitFormComponent } from './exit-form.component';
import { ButtonsModule } from '@app/shared/controls/customs/buttons/buttons.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [ExitFormComponent],
  exports: [ExitFormComponent]
})
export class ExitFormModule { }
