import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
/**
 * Esta clase es la única que debe ocupar HttpClient
 * los demás servicios deben usar RestClientService.
 */
export class RestClientService {
  public constructor(private httpClient: HttpClient) {}

  public get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
  }

  public post<T>(url: string, object: any): Observable<T> {
    return this.httpClient.post<T>(url, object);
  }
}
