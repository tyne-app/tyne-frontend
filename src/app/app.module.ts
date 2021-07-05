/**
 * COMPONENTS
 */
import { AppComponent } from './app.component';

import { RegistrationComponent } from './pages/auth/registration/registration.component';
import { LoginComponent } from './pages/auth/login/login.component';

/**
 * MODULES
 */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule  } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material/material.module';
import { HomeModule } from './pages/home/home.module';
import { AuthModule } from './pages/auth/auth.module';
import { BusinessProfileModule } from './pages/business-profile/business-profile.module';
import { ClientProfileModule } from './pages/client-profile/client-profile.module';
import { PrivacyModule } from './pages/privacy/privacy.module';
import { RefundPolicyModule } from './pages/refund-policy/refund-policy.module';
import { FrequentQuestionsModule } from './pages/frequent-questions/frequent-questions.module';

import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';



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
    AuthModule,
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
