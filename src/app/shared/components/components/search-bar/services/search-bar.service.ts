import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SearchBarService {
  public constructor() {}

  public setDateReservation(dateReservation: string): void {
    localStorage.setItem("dateReservation", dateReservation);
  }

  public getDateReservation(): string {
    return localStorage.getItem("dateReservation");
  }
}
