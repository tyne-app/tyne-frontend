/**ANGULAR CORE */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/**
 * MODULES
 */
import { ClientProfileRoutingModule } from '../routes/client-profile-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { HomeModule } from 'src/app/home/modules/home.module';
/**
 * COMPONENTS
 */
import { ProfileContainerComponent } from '../components/profile-container/profile-container.component';
import { ProfileImageComponent } from '../components/profile-image/profile-image.component';
import { ClientProfileComponent } from '../pages/client-profile.component';

@NgModule({
  declarations: [
    ClientProfileComponent, 
    ProfileContainerComponent, 
    ProfileImageComponent
  ],
  imports: [
    CommonModule,
    ClientProfileRoutingModule,
    SharedModule,
    MaterialModule, 
    ReactiveFormsModule,
    FormsModule,
    HomeModule
  ]
})
export class ClientProfileModule { }
