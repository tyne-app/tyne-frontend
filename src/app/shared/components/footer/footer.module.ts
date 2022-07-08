import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer.component";

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, RouterModule, MatButtonModule],
  exports: [FooterComponent],
})
export class FooterModule {}
