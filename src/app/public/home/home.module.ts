import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared/shared.module";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { StepModule } from "./shared/components/step/step.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, StepModule]
})
export class HomeModule {}
