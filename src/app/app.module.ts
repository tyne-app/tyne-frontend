import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { environment } from "@src/environments/environment";
import { LoggerModule, NgxLoggerLevel } from "ngx-logger";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SpinnerService } from "./shared/components/spinner/shared/services/spinner.service";
import * as AppMainProviderBarrel from "./shared/providers";
import { SharedModule } from "./shared/shared.module";

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
  ],
  providers: [
    AppMainProviderBarrel.authInterceptorProvider,
    AppMainProviderBarrel.MatDateLocalProvider,
    AppMainProviderBarrel.DateAdapterProvider,
    AppMainProviderBarrel.MatDateFormatProvider,
    AppMainProviderBarrel.MatPaginatorProvider,
    SpinnerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
