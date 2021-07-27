import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Esta clase es la única que debe ocupar HttpClient
 * los demás servicios deben usar RestClientService.
 */
export class RestClientService {

  constructor(private httpClient: HttpClient) { }

  public get<T>(url: string) {
    return this.httpClient.get<T>(url);
  }
}
