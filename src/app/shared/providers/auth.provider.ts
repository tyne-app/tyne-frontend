/** ANGULAR COMMON */
import { HTTP_INTERCEPTORS } from "@angular/common/http";
/** ANGULAR CORE */
import { ErrorHandler } from "@angular/core";
/** SERVICES */
import { InterceptorService } from "../interceptors/interceptor.service";
import { GlobalErrorHandler } from "../errors/global-error-handler";

export const authInterceptorProvider = [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
];

export const proccessErrorProvider = [
  {
    // processes all errors
    provide: ErrorHandler,
    useClass: GlobalErrorHandler,
  },
];