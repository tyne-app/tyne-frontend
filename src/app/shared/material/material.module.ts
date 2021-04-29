import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular Material Components
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


const materialComponents = [
  MatCheckboxModule,
  MatIconModule,
  MatDialogModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,],
  exports: [
    ...materialComponents
  ]
})
export class MaterialModule { }
