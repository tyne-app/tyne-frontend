import { Injectable } from "@angular/core";
import { City } from "@app/shared/interfaces/city";
import { GenericDataResponse } from "@app/shared/interfaces/generic-data-response";
import { State } from "@app/shared/interfaces/state";
import { environment } from "@src/environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


import { RestClientService } from "./rest-client.service";

@Injectable({
  providedIn: "root",
})
export class TerritorialsService {
  private urlBase = environment.apiLocals;

  public constructor(private client: RestClientService) {}

  public getCities(idCountry: number): Observable<City[]> {
    const url = this.urlBase + `/territories/countries/${idCountry}/cities`;
    return this.client.get<GenericDataResponse<City[]>>(url).pipe(
      map((res) => {
        return res.data;
      })
    );
  }

  public getStates(idcity: number): Observable<State[]> {
    const url = this.urlBase + `/territories/cities/${idcity}/states`;
    return this.client.get<GenericDataResponse<State[]>>(url).pipe(
      map((res) => {
        return res.data;
      })
    );
  }
}
