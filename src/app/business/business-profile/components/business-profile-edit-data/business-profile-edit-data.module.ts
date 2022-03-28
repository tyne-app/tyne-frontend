import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessProfileEditDataComponent } from './business-profile-edit-data.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { CloseModalModule } from '@app/shared/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from '@app/shared/controls/customs/buttons/buttons.module';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    CloseModalModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonsModule,
    MatRadioModule
  ],
  declarations: [BusinessProfileEditDataComponent],
  exports: [BusinessProfileEditDataComponent]
})
export class BusinessProfileEditDataModule { }
