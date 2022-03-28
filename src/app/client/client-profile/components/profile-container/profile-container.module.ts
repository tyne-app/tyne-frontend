import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileContainerComponent } from './profile-container.component';
import { ProfileImageModule } from '../profile-image/profile-image.module';
import { SharedModule } from '@app/shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ButtonsModule } from '@app/shared/controls/customs/buttons/buttons.module';


@NgModule({
  declarations: [
    ProfileContainerComponent],
  imports: [ 
    SharedModule,
    CommonModule,
    MatDividerModule,
    MatFormFieldModule,
    ButtonsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    ProfileImageModule
  ],
  exports: [ProfileContainerComponent]
})
export class ProfileContainerModule { }
