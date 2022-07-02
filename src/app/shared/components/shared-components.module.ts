import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import * as AppSharedBarrel from ".";
import { DateAdapterProvider, MatDateFormatProvider, MatDateLocalProvider } from "../providers/mat-date.provider";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    AppSharedBarrel.HeaderModule,
    AppSharedBarrel.AcceptPetModule,
    AppSharedBarrel.CloseModalModule,
    AppSharedBarrel.DialogModule,
    AppSharedBarrel.FooterModule,
    AppSharedBarrel.MapModule,
    AppSharedBarrel.SearchBarModule,
    AppSharedBarrel.SpinnerModule,
    AppSharedBarrel.CloseModalModule,
    AppSharedBarrel.ExitFormModule,
  ],
  exports: [
    AppSharedBarrel.HeaderModule,
    AppSharedBarrel.AcceptPetModule,
    AppSharedBarrel.CloseModalModule,
    AppSharedBarrel.DialogModule,
    AppSharedBarrel.FooterModule,
    AppSharedBarrel.MapModule,
    AppSharedBarrel.SearchBarModule,
    AppSharedBarrel.SpinnerModule,
    AppSharedBarrel.CloseModalModule,
    AppSharedBarrel.ExitFormModule,
  ],
  providers: [MatDateLocalProvider, DateAdapterProvider, MatDateFormatProvider],
})
export class SharedComponentsModule {}
