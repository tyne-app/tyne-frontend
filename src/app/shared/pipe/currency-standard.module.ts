import { NgModule } from "@angular/core";
import { CurrencyStandardPipe } from "./currency-standard.pipe";

@NgModule({
  declarations: [CurrencyStandardPipe],
  imports: [],
  exports: [CurrencyStandardPipe],
})
export class CurrencyStandardModule {}
