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

export const MatDateLocalProvider = [{
    provide: MAT_DATE_LOCALE,
    useValue: "es",
}];

export const DateAdapterProvider = [{
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
}];

export const MatDateFormatProvider = [{
    provide: MAT_DATE_FORMATS,
    useValue: MAT_MOMENT_DATE_FORMATS,
}];



