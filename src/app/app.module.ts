import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { environment } from "@src/environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DialogModule } from "./shared/components";
import { SpinnerService } from "./shared/components/spinner/shared/services/spinner.service";
import * as AppMainProviderBarrel from "./shared/providers";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DialogModule,
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
