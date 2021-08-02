import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule,
  MatExpansionModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

const MaterialComponents = [
  MatStepperModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatIconModule,
  MatDividerModule,
  MatRadioModule,
  MatCheckboxModule,
  CdkTableModule,
  MatDialogModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatSnackBarModule,
  MatListModule,
  MatSelectModule, 
  MatExpansionModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatTooltipModule,
  MatFormFieldModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }