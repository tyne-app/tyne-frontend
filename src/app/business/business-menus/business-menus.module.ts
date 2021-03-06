import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { FooterModule, HeaderModule, SpinnerModule } from "@app/shared/components";
import { ButtonsModule } from "@app/shared/controls/customs/buttons/buttons.module";
import { CurrencyStandardModule } from "@app/shared/pipe/currency-standard.module";
import { BusinessMenusRoutingModule } from "./business-menus-routing.module";
import { BusinessMenusComponent } from "./business-menus.component";

@NgModule({
  declarations: [BusinessMenusComponent],
  imports: [
    CurrencyStandardModule,
    BusinessMenusRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    HeaderModule,
    FooterModule,
    SpinnerModule,
  ],
})
export class BusinessMenusModule {}
