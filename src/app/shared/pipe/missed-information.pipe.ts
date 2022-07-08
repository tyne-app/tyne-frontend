import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "missedInformation",
})
export class MissedInformationPipe implements PipeTransform {
  private missedInformation = "Sin información";

  public transform(value: string | Date): string | Date {
    return value ? value : this.missedInformation;
  }
}
