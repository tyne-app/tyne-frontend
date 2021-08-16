
/**MODULES */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import  {RouterModule } from '@angular/router';

/**COMPONENTS */
import { MapComponent } from '../components/map/components/map.component';
import { CloseModalComponent } from '../components/close-modal/close-modal.component';
import { SpinnerComponent } from '../components/spinner/spinner.component';
import { NotFoundPageComponent } from '../components/not-found-page/not-found-page.component';

/**DIRECTIVES */
import { PhoneMaskDirective } from '../directives/phone-mask.directive';
import { SanitizeHtmlDirective } from '../directives/sanitize-html.directive';
import { SafeHtml } from '../pipe/safeHtml.pipe';


@NgModule({
  declarations: [
    MapComponent,
    CloseModalComponent,
    SpinnerComponent,
    PhoneMaskDirective,
    PhoneMaskDirective,
    SanitizeHtmlDirective,
    SafeHtml,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
 
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, RouterModule],
  exports: [
    ReactiveFormsModule,
    MapComponent,
    CloseModalComponent,
    PhoneMaskDirective,
    SpinnerComponent,
    SanitizeHtmlDirective,
    SafeHtml,
    NotFoundPageComponent
  ]
})
export class SharedModule {}
