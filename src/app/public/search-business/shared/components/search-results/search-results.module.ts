import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatOptionModule } from "@angular/material/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatPaginatorProvider } from "@app/shared/providers";
import { BusinessCardModule } from "../business-card/business-card.module";
import { SearchResultsComponent } from "./search-results.component";

@NgModule({
  declarations: [SearchResultsComponent],
  imports: [CommonModule, MatCardModule, MatPaginatorModule, MatSelectModule, MatOptionModule, BusinessCardModule],
  exports: [SearchResultsComponent],
  providers: [MatPaginatorProvider],
})
export class SearchResultsModule {}
