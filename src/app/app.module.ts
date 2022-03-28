import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from "@angular/fire/analytics";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { getFunctions, provideFunctions } from "@angular/fire/functions";
import { getPerformance, providePerformance } from "@angular/fire/performance";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "@app/shared/shared.module";
import { environment } from "@src/environments/environment";
import { LoggerModule, NgxLoggerLevel } from "ngx-logger";
import * as AppMainBarrel from ".";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import * as AppMainProviderBarrel from "./shared/providers";
@NgModule({
  declarations: [AppComponent],
  imports: [
    LoggerModule.forRoot({
      level: NgxLoggerLevel.TRACE,
      colorScheme: ["purple", "teal", "blue", "green", "red", "red", "red"],
      disableConsoleLogging: false,
    }),
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    AppMainBarrel.HomeModule,
    AppMainBarrel.LoginModule,
    AppMainBarrel.ClientRegistrationModule,
    AppMainBarrel.BusinessDetailsModule,
    AppMainBarrel.PrivacyModule,
    AppMainBarrel.ClientProfileModule,
    AppMainBarrel.RefundPolicyModule,
    AppMainBarrel.FrequentQuestionsModule,
    AppMainBarrel.ClientCreateReservationModule,
    AppMainBarrel.ClientStatusPayModule,
    AppMainBarrel.BussinesHomeModule,
    AppMainBarrel.SignOffModule,
    AppMainBarrel.RecoverPasswordModule,
    AppMainBarrel.RestoredPasswordModule,
    AppMainBarrel.AboutUsModule,
    AppMainBarrel.NotFoundPageModule,
    provideAnalytics(() => getAnalytics()),
    provideFunctions(() => getFunctions()),
    providePerformance(() => getPerformance()),
  ],
  providers: [
    AppMainProviderBarrel.authInterceptorProvider,
    AppMainProviderBarrel.MatDateLocalProvider,
    AppMainProviderBarrel.DateAdapterProvider,
    AppMainProviderBarrel.MatDateFormatProvider,
    AppMainProviderBarrel.MatPaginatorProvider,
    ScreenTrackingService,
    UserTrackingService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
