import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Client } from "src/app/shared/interfaces/client";
import { DataResponse } from "src/app/shared/interfaces/token";
import { environment } from "src/environments/environment";
import { RestClientService } from "./rest-client.service";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  private endpoint = environment.apiClients;

  public constructor(private http: HttpClient, private restClient: RestClientService) {}

  public register(client: Client): Observable<any> {
    return this.restClient.post<any>(`${this.endpoint}/clients/`, client);
  }

  public login(email: string, password?: string): Observable<string> {
    return this.http.post<DataResponse>(`${this.endpoint}/login/`, { email, password }).pipe(
      map((res) => {
        return res.data;
      })
    );
  }

  public logout(): void {
    sessionStorage.clear();
    localStorage.clear();
  }
}
