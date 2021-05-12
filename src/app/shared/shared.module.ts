import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ReactiveFormsModule
  ]
})
export class SharedModule { }
