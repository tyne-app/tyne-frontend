import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { HeaderLoginComponent } from "./header-login.component";

@NgModule({
  declarations: [HeaderLoginComponent],
  imports: [CommonModule, MatMenuModule, MatButtonModule, MatIconModule, MatDialogModule],
  exports: [HeaderLoginComponent],
})
export class HeaderLoginModule {}
