import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { environment } from "src/environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BusinessDetailsModule } from "./business-details/modules/business-details.module";
import { ClientProfileModule } from "./client-profile/modules/client-profile.module";
import { ClientRegistrationModule } from "./client-registration/modules/client-registration.module";
import { ClientRegistrationComponent } from "./client-registration/pages/client.registration.component";
import { CreateReservationModule } from "./create-reservation/modules/client-registration.module";
import { CreateReservationComponent } from "./create-reservation/pages/create-reservation.component";
import { FrequentQuestionsModule } from "./frecuent-questions/modules/frequent-questions.module";
import { HomeModule } from "./home/modules/home.module";
import { LoginModule } from "./login/modules/login.module";
import { LoginComponent } from "./login/pages/login.component";
import { PrivacyModule } from "./privacy/modules/privacy.module";
import { RefundPolicyModule } from "./refund-policy/modules/refund-policy.module";
import { SpinnerComponent } from "./shared/components/components/spinner/spinner.component";
import { MaterialModule } from "./shared/modules/material.module";
import { SharedModule } from "./shared/modules/shared.module";
import { authInterceptorProvider } from "./shared/providers/auth.provider";
import { DateAdapterProvider, MatDateFormatProvider, MatDateLocalProvider } from "./shared/providers/mat-date.provider";
import { RestClientService } from "./shared/services/rest-client.service";
import { StatusPayModule } from "./status-pay/modules/status-pay.module";

@NgModule({
  declarations: [AppComponent],
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
    FrequentQuestionsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    CreateReservationModule,
    StatusPayModule,
  ],
  entryComponents: [ClientRegistrationComponent, LoginComponent, SpinnerComponent, CreateReservationComponent],
  providers: [
    authInterceptorProvider,
    RestClientService,
    MatDateLocalProvider,
    DateAdapterProvider,
    MatDateFormatProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
