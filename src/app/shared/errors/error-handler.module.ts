import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { authInterceptorProvider, proccessErrorProvider } from "@shared/providers/auth.provider";

@NgModule({
  declarations: [],
  imports: [CommonModule],

  // register the classes for the error interception here
  providers: [
    proccessErrorProvider,
    // Interceptor for HTTP errors // multiple interceptors are possible
    authInterceptorProvider,
  ],
})
export class ErrorHandlerModule {}
