import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "currencyStandard",
})
export class CurrencyStandardPipe implements PipeTransform {
  public transform(
    value: number,
    symbol?: string,
    currencySign = "$",
    decimalLength = 0,
    chunkDelimiter = ".",
    decimalDelimiter = ",",
    chunkLength = 3
  ): string {
    const result = "\\d(?=(\\d{" + chunkLength + "})+" + (decimalLength > 0 ? "\\D" : "$") + ")";
    const finalNumber = value.toFixed(Math.max(0, ~~decimalLength));

    return (
      currencySign +
      (decimalDelimiter ? finalNumber.replace(".", decimalDelimiter) : finalNumber).replace(
        new RegExp(result, "g"),
        "$&" + chunkDelimiter
      ) +
      (symbol ? " " + symbol : "")
    );
  }
}
