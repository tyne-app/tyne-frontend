import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorHandler, NgModule } from "@angular/core";
import { InterceptorService } from "../interceptors/interceptor.service";
import { GlobalErrorHandler } from "./global-error-handler";

@NgModule({
  declarations: [],
  imports: [CommonModule],

  // register the classes for the error interception here
  providers: [
    {
      // processes all errors
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    {
      // interceptor for HTTP errors
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true, // multiple interceptors are possible
    },
  ],
})
export class ErrorHandlerModule {}
