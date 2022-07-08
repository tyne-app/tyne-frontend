import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { FooterModule, HeaderModule } from "@app/shared/components";
import { FrequentQuestionsRoutingModule } from "./frequent-questions-routing.module";
import { FrequentQuestionsComponent } from "./frequent-questions.component";

@NgModule({
  declarations: [FrequentQuestionsComponent],
  imports: [CommonModule, FrequentQuestionsRoutingModule, MatExpansionModule, FooterModule, HeaderModule],
})
export class FrequentQuestionsModule {}
