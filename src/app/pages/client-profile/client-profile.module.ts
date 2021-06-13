import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientProfileRoutingModule } from './client-profile-routing.module';
import { ClientProfileComponent } from './client-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderClientProfileComponent } from './components/header-client-profile/header-client-profile.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ProfileContainerComponent } from './components/profile-container/profile-container.component';
import { ProfileImageComponent } from './components/profile-image/profile-image.component';


@NgModule({
  declarations: [ClientProfileComponent, HeaderClientProfileComponent, ProfileContainerComponent, ProfileImageComponent],
  imports: [
    CommonModule,
    ClientProfileRoutingModule ,
    SharedModule,
    MaterialModule
  ]
})
export class ClientProfileModule { }
