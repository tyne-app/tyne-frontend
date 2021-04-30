import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular Material Components
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';


const materialComponents = [
  MatCheckboxModule,
  MatIconModule,
  MatDialogModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialComponents
  ],
  exports: [
    ...materialComponents
  ]
})
export class MaterialModule { }
