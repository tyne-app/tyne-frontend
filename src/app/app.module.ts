import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/modules/shared.module';
import { MaterialModule } from './shared/modules/material.module';
import { HomeModule } from './home/modules/home.module';
import { ClientProfileModule } from './client-profile/modules/client-profile.module';
import { PrivacyModule } from './privacy/modules/privacy.module';
import { RefundPolicyModule } from './refund-policy/modules/refund-policy.module';
import { FrequentQuestionsModule } from './frecuent-questions/modules/frequent-questions.module';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { LoginComponent } from './login/pages/login.component';
import { ClientRegistrationComponent } from './client-registration/pages/client.registration.component';
import { LoginModule } from './login/modules/login.module';
import { ClientRegistrationModule } from './client-registration/modules/client-registration.module';
import { BusinessDetailsModule } from './business-details/modules/business-details.module';
import { RestClientService } from './shared/services/rest-client.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    HomeModule,
    LoginModule,
    ClientRegistrationModule,
    BusinessDetailsModule,
    PrivacyModule,
    HttpClientModule,
    ClientProfileModule,
    RefundPolicyModule,
    FrequentQuestionsModule
  ],
  entryComponents: [ClientRegistrationComponent, LoginComponent],
  providers: [
    RestClientService,
    {
      provide: MAT_DATE_LOCALE, useValue: 'es'
    },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS ]
    },
    {
      provide:  MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
