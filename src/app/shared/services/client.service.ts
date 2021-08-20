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
  private endpoint = environment.API_BASE_CLIENTS;

  public constructor(
    private http: HttpClient,
    private restClient: RestClientService
  ) {}

  public register(client: Client): Observable<any> {
    return this.restClient.post<any>(
      "https://api-clients-tyne.herokuapp.com/v1/clients/",
      client
    );
    /*
     * return new Promise((resolve) => {
     *   this.http
     *     .post("https://ms-user-gestor.herokuapp.com/createUser", client)
     *     .subscribe(async (resp) => {
     *       console.log(resp);
     *     });
     * });
     */
  }

  //* *Return Token */
  login(email: string, password: string): Observable<string> {
    return this.http
      .post<DataResponse>(`${this.endpoint}/login/`, { email, password })
      .pipe(
        map((res) => {
          return res.data;
        })
      );
  }

  logout(): void {
    sessionStorage.clear();
    localStorage.clear();
  }
}
