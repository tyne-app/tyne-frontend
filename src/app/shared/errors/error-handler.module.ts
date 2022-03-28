import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { authInterceptorProvider, proccessErrorProvider } from "@shared/providers/auth.provider";
@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    proccessErrorProvider,
    authInterceptorProvider,
  ],
})
export class ErrorHandlerModule {}
