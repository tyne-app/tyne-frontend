import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessProfileEditBankDataComponent } from './business-profile-edit-bank-data.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CloseModalModule } from '@app/shared/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonsModule } from '@app/shared/controls/customs/buttons/buttons.module';
import { MatOptionModule } from '@angular/material/core';

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
    MatOptionModule
  ],
  declarations: [BusinessProfileEditBankDataComponent],
  exports: [BusinessProfileEditBankDataComponent]
})
export class BusinessProfileEditBankDataModule { }
