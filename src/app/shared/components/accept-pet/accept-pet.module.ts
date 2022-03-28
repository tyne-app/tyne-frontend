import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceptPetComponent } from './accept-pet.component';


@NgModule({
  declarations: [ AcceptPetComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AcceptPetComponent
  ]
})
export class AcceptPetModule { }
