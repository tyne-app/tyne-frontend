import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular Material Components
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material';

const materialComponents = [
  MatCheckboxModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    materialComponents
  ]
})
export class MaterialModule { }
