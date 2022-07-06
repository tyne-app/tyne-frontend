import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { LoginModule } from "@app/auth/login/login.module";
import { ClientRegistrationModule } from "@app/client";
import { HeaderPublicComponent } from "./header-public.component";

@NgModule({
  declarations: [HeaderPublicComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    LoginModule,
    ClientRegistrationModule,
    MatDialogModule,
  ],
  exports: [HeaderPublicComponent],
})
export class HeaderPublicModule {}
