import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { City } from "@app/shared/interfaces/common/city";
import { State } from "@app/shared/interfaces/common/state";
import { environment } from "@src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TerritorialsService {
  private urlBase = environment.apiTyne;

  public constructor(private http:HttpClient) {}

  public getCities(idCountry: number): Observable<City[]> {
    const url = this.urlBase + `/territories/countries/${idCountry}/cities`;
    return this.http.get<City[]>(url);
  }

  public getStates(idCity: number): Observable<State[]> {
    const url = this.urlBase + `/territories/cities/${idCity}/states`;
    return this.http.get<State[]>(url);
  }
}
