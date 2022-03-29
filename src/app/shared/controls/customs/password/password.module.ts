import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PasswordComponent } from "./password.component";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [PasswordComponent],
  imports: [CommonModule, MatIconModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormsModule],
  exports: [PasswordComponent],
})
export class PasswordModule {}
