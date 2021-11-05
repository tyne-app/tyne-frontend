import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ClientSocialNetworkRequest } from "@app/shared/interfaces/request/client-social-network-request";
import { ClientResponse } from "@app/shared/interfaces/response/client_response";
import { Client } from "@shared/interfaces/client";
import { LoginResponse } from "@shared/interfaces/token";
import { environment } from "@src/environments/environment";
import { Observable } from "rxjs";
import { RestClientService } from "./rest-client.service";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  private urlBase = environment.apiTyne;

  public constructor(private http: HttpClient, private restClient: RestClientService) {}

  public register(client: Client): Observable<any> {
    return this.restClient.post<any>(`${this.urlBase}/clients/`, client);
  }

  public registerWithSocialNetworks(client: ClientSocialNetworkRequest): Observable<any> {
    return this.restClient.post<any>(`${this.endpoint}/clients/social-networks`, client);
  }

  public login(email: string, password?: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.urlBase}/users/login`, { email, password });
  }

  public socialLogin(email: string, token: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.endpoint}/users/social-login`, { email, token });
  }

  public getById(id: number): Observable<ClientResponse> {
    return this.http.get<ClientResponse>(`${this.urlBase}/clients/${id}`);
  }

  public putImageProfile(imageProfile: File): Observable<any> {
    const imageProfileFile: FormData = new FormData();
    imageProfileFile.append("image", imageProfile, imageProfile.name);
    return this.http.post<any>(`${this.urlBase}/users/profile-image`, imageProfileFile);
  }

  public putPassword(passwordToUpdate: string): Observable<any> {
    return this.http.put(`${this.urlBase}/clients/update-password`, { password: passwordToUpdate });
  }

  public logout(): void {
    sessionStorage.clear();
    localStorage.clear();
  }
}
