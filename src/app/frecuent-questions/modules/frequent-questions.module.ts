import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrequentQuestionsRoutingModule } from '../routes/frequent-questions-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { HomeModule } from '../../home/modules/home.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { FrequentQuestionsComponent } from '../pages/frequent-questions.component';

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
