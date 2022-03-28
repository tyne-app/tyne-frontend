import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared/shared.module";
import { SearchBusinessComponent } from "./search-business.component";
import { SearchBusinessRoutingModule } from "./search-business-routing.module";
import { SearchResultsModule } from "./shared/components/search-results/search-results.module";

@NgModule({
  declarations: [SearchBusinessComponent],
  imports: [
    CommonModule,
    SharedModule,
    SearchBusinessRoutingModule,
    SearchResultsModule
  ],
})
export class SearchBusinessModule {}
