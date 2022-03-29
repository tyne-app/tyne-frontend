import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-image-container',
  templateUrl: './step-image-container.component.html',
  styleUrls: ['./step-image-container.component.scss']
})
export class StepImageContainerComponent {
  @Input() public imageUrl!: string;
  @Input() public title!: string; 
}
