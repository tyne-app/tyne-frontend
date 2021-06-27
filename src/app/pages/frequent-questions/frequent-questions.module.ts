import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrequentQuestionsRoutingModule } from './frequent-questions-routing.module';
import { FrequentQuestionsComponent } from './frequent-questions.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HomeModule } from '../home/home.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [FrequentQuestionsComponent],
  imports: [
    CommonModule,
    FrequentQuestionsRoutingModule,
    MaterialModule,
    HomeModule,
    SharedModule
  ]
})
export class FrequentQuestionsModule { }
