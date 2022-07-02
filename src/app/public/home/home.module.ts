import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoginModule, SignOffModule } from "@app/auth";
import { ClientRegistrationModule } from "@app/client";
import { SharedModule } from "@app/shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { StepModule } from "./shared/components/step/step.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    StepModule,
    LoginModule,
    SignOffModule,
    ClientRegistrationModule,
  ],
})
export class HomeModule {}
