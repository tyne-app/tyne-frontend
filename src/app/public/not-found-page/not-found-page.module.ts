import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './not-found-page.component';
import { HeaderModule } from '../../shared/components/header/header.module';
import { FooterModule } from '../../shared/components/footer/footer.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    MatButtonModule
  ],
  exports: [
    NotFoundPageComponent
  ]
})
export class NotFoundPageModule { }
