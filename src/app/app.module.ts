import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule  } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material/material.module';
import { HomeModule } from './home/modules/home.module';
import { BusinessProfileModule } from './business-profile/modules/business-profile.module';
import { ClientProfileModule } from './client-profile/modules/client-profile.module';
import { PrivacyModule } from './privacy/modules/privacy.module';
import { RefundPolicyModule } from './refund-policy/modules/refund-policy.module';
import { FrequentQuestionsModule } from './frecuent-questions/modules/frequent-questions.module';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { LoginComponent } from './login/pages/login.component';
import { RegistrationComponent } from './client-registration/pages/registration.component';
import { LoginModule } from './login/modules/login.module';
import { ClientRegistrationModule } from './client-registration/modules/client-registration.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    HomeModule,
    LoginModule,
    ClientRegistrationModule,
    BusinessProfileModule,
    PrivacyModule,
    HttpClientModule,
    ClientProfileModule,
    RefundPolicyModule,
    FrequentQuestionsModule
  ],
  entryComponents: [RegistrationComponent, LoginComponent],
  providers: [
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
