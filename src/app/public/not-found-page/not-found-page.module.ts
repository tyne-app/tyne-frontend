import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { SharedModule } from "@app/shared/shared.module";
import { NotFoundPageRoutingModule } from "./not-found-page-routing.module";
import { NotFoundPageComponent } from "./not-found-page.component";

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [CommonModule, NotFoundPageRoutingModule, SharedModule, MatButtonModule],
})
export class NotFoundPageModule {}
