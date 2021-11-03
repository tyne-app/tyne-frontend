import { Injectable } from "@angular/core";
import { RestClientService } from "@app/core/services/rest-client.service";
import { Bank } from "@shared/interfaces/bank";
import { GenericDataResponse } from "@shared/interfaces/generic-data-response";
import { environment } from "@src/environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class BankService {
  private urlBase = environment.apiTyne;

  public constructor(private client: RestClientService) {}

  public getBanks(): Observable<Bank[]> {
    const url = this.urlBase + `/banks`;
    return this.client.get<GenericDataResponse<Bank[]>>(url).pipe(
      map((res) => {
        return res.data;
      })
    );
  }
}
