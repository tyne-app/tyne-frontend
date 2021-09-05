/** ANGULAR COMMON */
import { CommonModule } from "@angular/common";
/** ANGULAR CORE */
import { NgModule } from "@angular/core";
/** SERVICES */
import { authInterceptorProvider, proccessErrorProvider } from "../providers/auth.provider";

@NgModule({
  declarations: [],
  imports: [CommonModule],

  // register the classes for the error interception here
  providers: [
    proccessErrorProvider,
    // Interceptor for HTTP errors // multiple interceptors are possible
    authInterceptorProvider
  
  ],
})
export class ErrorHandlerModule {}
