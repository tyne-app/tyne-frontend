import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPublicComponent } from './header-public.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    HeaderPublicComponent 
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    HeaderPublicComponent
  ]
})
export class HeaderPublicModule { }
