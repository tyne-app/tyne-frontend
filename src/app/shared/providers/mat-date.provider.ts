/** ANGULAR CORE */
import {
    MAT_MOMENT_DATE_ADAPTER_OPTIONS,
    MAT_MOMENT_DATE_FORMATS,
    MomentDateAdapter,
  } from "@angular/material-moment-adapter";
import {
    DateAdapter,
    MAT_DATE_FORMATS,
    MAT_DATE_LOCALE,
} from "@angular/material/core";

/** Local ID */
export const MatDateLocalProvider = [{
    provide: MAT_DATE_LOCALE,
    useValue: "es",
}];

/** TODO: Refactor */
/** Date Adapter */
export const DateAdapterProvider = [{
    
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
      
}];

/** TODO: Refactor */
/** Date Format */
export const MatDateFormatProvider = [{
    provide: MAT_DATE_FORMATS,
    useValue: MAT_MOMENT_DATE_FORMATS,
}];