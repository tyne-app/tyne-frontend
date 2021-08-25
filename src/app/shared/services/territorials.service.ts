import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { City } from "../interfaces/city";
import { GenericDataResponse } from "../interfaces/generic-data-response";
import { State } from "../interfaces/state";
import { RestClientService } from "./rest-client.service";

@Injectable({
  providedIn: "root",
})
export class TerritorialsService {
  private urlBase = environment.apiBackoffice;

  public constructor(private client: RestClientService) {}

  public getCities(idCountry: number): Observable<City[]> {
    const url = this.urlBase + `v1/territorials/country/${idCountry}/cities`;
    return this.client.get<GenericDataResponse<City[]>>(url).pipe(
      map((res) => {
        return res.data;
      })
    );
  }

  public getStates(idcity: number): Observable<State[]> {
    const url = this.urlBase + `v1/territorials/city/${idcity}/states`;
    return this.client.get<GenericDataResponse<State[]>>(url).pipe(
      map((res) => {
        return res.data;
      })
    );
  }
}
