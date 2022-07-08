import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoginModule } from "@app/auth/login/login.module";
import { SignOffModule } from "@app/auth/sign-off/sign-off.module";
import { ClientRegistrationModule } from "@app/client";
import { FooterModule, HeaderModule } from "@app/shared/components";
import { DateAdapterProvider, MatDateFormatProvider, MatDateLocalProvider } from "@app/shared/providers";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { StepModule } from "./shared/components/step/step.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StepModule,
    LoginModule,
    SignOffModule,
    ClientRegistrationModule,
    HeaderModule,
    FooterModule,
  ],
  providers: [MatDateLocalProvider, DateAdapterProvider, MatDateFormatProvider],
})
export class HomeModule {}
