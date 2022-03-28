import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { FrequentQuestionsComponent } from './frequent-questions.component';
import { FrequentQuestionsRoutingModule } from './frequent-questions-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [FrequentQuestionsComponent],
  imports: [
    CommonModule,
    FrequentQuestionsRoutingModule,
    MatExpansionModule,
    SharedModule
  ]
})
export class FrequentQuestionsModule { }
