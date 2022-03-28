import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./footer.component";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, RouterModule, MatButtonModule],
  exports: [FooterComponent],
})
export class FooterModule {}
