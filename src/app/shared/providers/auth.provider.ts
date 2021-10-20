import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorHandler } from "@angular/core";
import { GlobalErrorHandler } from "@shared/errors/global-error-handler";
import { InterceptorService } from "@shared/interceptors/interceptor.service";

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
