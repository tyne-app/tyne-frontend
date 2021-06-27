import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrequentQuestionsComponent } from './frequent-questions.component';


const routes: Routes = [
  {path: '', component: FrequentQuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrequentQuestionsRoutingModule { }
