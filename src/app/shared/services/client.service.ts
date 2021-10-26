import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Client } from "@shared/interfaces/client";
import { LoginResponse } from "@shared/interfaces/token";
import { environment } from "@src/environments/environment";
import { Observable } from "rxjs";
import { ClientResponse } from "../interfaces/response/client_response";
import { RestClientService } from "./rest-client.service";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  private endpoint = environment.apiLocals;

  public constructor(private http: HttpClient, private restClient: RestClientService) {}

  public register(client: Client): Observable<any> {
    return this.restClient.post<any>(`${this.endpoint}/clients/`, client);
  }

  public login(email: string, password?: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.endpoint}/users/login`, { email, password });
  }

  public getById(id: number): Observable<ClientResponse> {
    return this.http.get<ClientResponse>(`${this.endpoint}/clients/${id}`);
  }

  public logout(): void {
    sessionStorage.clear();
    localStorage.clear();
  }
}
