import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import  {RouterModule } from '@angular/router';
import { MapComponent } from '../components/map/components/map.component';
import { PhoneMaskDirective } from '../directives/phone-mask.directive';
import { CloseModalComponent } from '../components/close-modal/close-modal.component';

@NgModule({
  declarations: [
    MapComponent,
    CloseModalComponent,
    PhoneMaskDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ReactiveFormsModule,
    MapComponent,
    CloseModalComponent,
    PhoneMaskDirective
  ]
})
export class SharedModule { }
