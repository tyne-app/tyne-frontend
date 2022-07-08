import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { FooterModule, HeaderModule } from "@app/shared/components";
import { NotFoundPageRoutingModule } from "./not-found-page-routing.module";
import { NotFoundPageComponent } from "./not-found-page.component";

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [CommonModule, NotFoundPageRoutingModule, MatButtonModule, HeaderModule, FooterModule],
})
export class NotFoundPageModule {}
