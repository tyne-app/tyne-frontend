import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ClientResponse } from "@app/client/shared/interfaces/client_response";
import { environment } from "@src/environments/environment";
import { Observable } from "rxjs";
import { Client } from "../interfaces/client";
import { ClientReservation } from "../interfaces/client-reservation";
import { ClientSocialNetworkRequest } from "../interfaces/client-social-network-request";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  private urlBase = environment.apiTyne;

  public constructor(private http: HttpClient) {}

  public register(client: Client): Observable<any> {
    return this.http.post<any>(`${this.urlBase}/clients`, client);
  }

  public registerWithSocialNetworks(client: ClientSocialNetworkRequest): Observable<any> {
    return this.http.post<any>(`${this.urlBase}/clients/social-networks`, client);
  }

  public getById(id: number): Observable<ClientResponse> {
    return this.http.get<ClientResponse>(`${this.urlBase}/clients/${id}`);
  }

  public putPassword(passwordToUpdate: string): Observable<any> {
    return this.http.put(`${this.urlBase}/clients/update-password`, { password: passwordToUpdate });
  }
  public getClientReservations(): Observable<ClientReservation[]> {
    const url = this.urlBase + `/clients/reservations`;
    return this.http.get<ClientReservation[]>(url);
  }

  public cancelReservation(cancelation: any): Observable<any> {
    const url = this.urlBase + `/clients/cancel-reservation`;
    return this.http.put<any>(url, cancelation);
  }

  public logout(): void {
    sessionStorage.clear();
    localStorage.clear();
  }
}
