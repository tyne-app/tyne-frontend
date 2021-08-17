/**ANGULAR CORE */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientProfileService {
  

  private httpOptions: { headers: HttpHeaders; };

  private endpoint = environment.API_BASE_CLIENTS; 
  
  constructor(private http: HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'access_token': localStorage.getItem('access_token')
      })
    };
  }
  
  public getImageProfile(): Observable<any> {
    return this.http.get<any>(`${this.endpoint}/image`, this.httpOptions);
  }

  public putPassword(): Observable<any> {
    return this.http.put<any>(`${this.endpoint}`, this.httpOptions);
  }

  public putImageProfile(): Observable<any>{
    return this.http.put<any>(`${this.endpoint}`, this.httpOptions);
  } 

}
