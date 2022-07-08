import { NgModule } from "@angular/core";
import { FooterModule, HeaderModule, SearchBarModule } from "@app/shared/components";
import { SearchBusinessRoutingModule } from "./search-business-routing.module";
import { SearchBusinessComponent } from "./search-business.component";
import { SearchResultsModule } from "./shared/components/search-results/search-results.module";

@NgModule({
  declarations: [SearchBusinessComponent],
  imports: [SearchBusinessRoutingModule, SearchResultsModule, FooterModule, HeaderModule, SearchBarModule],
})
export class SearchBusinessModule {}
