import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Bank } from "@app/shared/interfaces/common/bank";
import { environment } from "@src/environments/environment";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class BankService {
  private urlBase = environment.apiTyne;
 
  public constructor(private http:HttpClient) {}

  public getBanks(): Observable<Bank[]> {
    const url = this.urlBase + `/banks`;
    return this.http.get<Bank[]>(url);
  }
}
