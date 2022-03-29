import { Injectable } from "@angular/core";
import { LocalStorageService } from "@app/shared/helpers/local-storage.service";

@Injectable({
  providedIn: "root",
})
export class SearchBarService {
  public constructor(
    private localStorageService:LocalStorageService
  ) {}

  public setDateReservation(dateReservation: string): void {
    this.localStorageService.setValue("dateReservation", dateReservation);
  }

  public getDateReservation(): string {
    return this.localStorageService.getValue("dateReservation");
  }
}
