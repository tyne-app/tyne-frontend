import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarPipe } from '../../shared/pipes/avatar.pipe';
import { ProfileImageComponent } from './profile-image.component';
import { SharedModule } from '@app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ProfileImageComponent,AvatarPipe],
  imports: [
    CommonModule,
    MatButtonModule,
    SharedModule
  ],
  exports: [ProfileImageComponent]
})
export class ProfileImageModule { }
