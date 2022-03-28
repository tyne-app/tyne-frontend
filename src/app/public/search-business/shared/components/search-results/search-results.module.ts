import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results.component';
import { BusinessCardModule } from '../business-card/business-card.module';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@NgModule({
  declarations: [SearchResultsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorModule,
    MatSelectModule,
    MatOptionModule,
    BusinessCardModule
  ],
  exports: [SearchResultsComponent]
})
export class SearchResultsModule { }
