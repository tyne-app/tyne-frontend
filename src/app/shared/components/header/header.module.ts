import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { HeaderLoginModule } from "./header-login/header-login.module";
import { HeaderPublicModule } from "./header-public/header-public.module";
import { HeaderComponent } from "./header.component";
import { LogoPipe } from "./shared/pipes/logo.pipe";

@NgModule({
  declarations: [HeaderComponent, LogoPipe],
  imports: [
    CommonModule,
    HeaderPublicModule,
    HeaderLoginModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    // LoginModule,
    // ClientRegistrationModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
