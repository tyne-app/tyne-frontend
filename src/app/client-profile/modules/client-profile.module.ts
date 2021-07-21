import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientProfileRoutingModule } from '../routes/client-profile-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HeaderClientProfileComponent } from '../components/header-client-profile/header-client-profile.component';
import { ProfileContainerComponent } from '../components/profile-container/profile-container.component';
import { ProfileImageComponent } from '../components/profile-image/profile-image.component';
import { ClientProfileComponent } from '../pages/client-profile.component';
import { HomeModule } from 'src/app/home/modules/home.module';

@NgModule({
  declarations: [
    ClientProfileComponent, 
    HeaderClientProfileComponent, 
    ProfileContainerComponent, 
    ProfileImageComponent
  ],
  imports: [
    CommonModule,
    ClientProfileRoutingModule ,
    SharedModule,
    MaterialModule, 
    ReactiveFormsModule,
    FormsModule,
    HomeModule
  ]
})
export class ClientProfileModule { }
