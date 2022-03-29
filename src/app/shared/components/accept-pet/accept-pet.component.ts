import {Component, Input, } from '@angular/core';
@Component({
  selector: 'app-accept-pet',
  templateUrl: './accept-pet.component.html',
  styleUrls: ['./accept-pet.component.scss']
})
export class AcceptPetComponent {
  @Input() public acceptPet!: boolean;
}
