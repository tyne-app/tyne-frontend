import { NgModule } from '@angular/core';
/**
 * MODULES ANGULAR
 */
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
  MatStepperModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule,
  MatExpansionModule,
  MatNativeDateModule,
  MatDatepickerModule
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
  MatDatepickerModule
];


@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents, MatFormFieldModule]
})

export class MaterialModule { }
