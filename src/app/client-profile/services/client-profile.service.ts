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
  
  private endpoint = environment.API_BASE_CLIENTS; 
  
  constructor(private http: HttpClient) {}

  public getImageProfile(): Observable<string> {
    return this.http.get<string>(`${this.endpoint}/clients/image`);
  }

  public putPassword(imageId:string, imageProfile: FormData): Observable<any> {
    return this.http.put<any>(`${this.endpoint}/clients/image/${imageId}`, imageProfile);
  }

  public putImageProfile(password:string): Observable<any>{
    return this.http.put<any>(`${this.endpoint}/clients/update-password`, password);
  } 

}
