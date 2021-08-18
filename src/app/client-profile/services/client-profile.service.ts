/**ANGULAR CORE */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**REACTIVE */
import { Observable } from 'rxjs';

/**ENVIRONMENT */
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

  /**TODO: ADD INTERFACES AS RESPONSES  */

  public getImageProfile(): Observable<any> {
    return this.http.get<any>(`${this.endpoint}/image`, this.httpOptions);
  }

  public putPassword(imageId: string): Observable<any> {
    return this.http.put<any>(`${this.endpoint}/image/${imageId}`, this.httpOptions);
  }

  public putImageProfile(password:string): Observable<any>{
    return this.http.put<any>(`${this.endpoint}/update-password`, password,  this.httpOptions);
  } 

}
