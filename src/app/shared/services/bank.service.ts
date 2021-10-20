import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "@src/environments/environment";
import { Bank } from "@shared/interfaces/bank";
import { GenericDataResponse } from "@shared/interfaces/generic-data-response";
import { RestClientService } from "@shared/services/rest-client.service";

@Injectable({
  providedIn: "root",
})
export class BankService {
  private urlBase = environment.apiLocals;

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
