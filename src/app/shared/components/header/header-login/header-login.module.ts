import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLoginComponent } from './header-login.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    HeaderLoginComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    HeaderLoginComponent
  ]
})
export class HeaderLoginModule { }
