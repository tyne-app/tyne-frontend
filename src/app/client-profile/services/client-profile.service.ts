/**
 * ANGULAR CORE 
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/**
 *REACTIVE 
 */
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataResponse } from 'src/app/shared/interfaces/token';
/**
 *ENVIRONMENT 
 */
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ClientProfileService {
  
  private endpoint = environment.API_BASE_CLIENTS; 
  
  constructor(private http: HttpClient) {};

  public getImageProfile(): Observable<string> {
    return this.http.get<DataResponse>(`${this.endpoint}/clients/image`)
            .pipe( map ( res => {
              return res.data;
            }));
          }
          
  public putImageProfile( imageId:string, imageProfile: File): Observable<any>{

    const formData: FormData = new FormData();
    formData.append('file', imageProfile);
    
    return this.http.put<any>(`${this.endpoint}/clients/image/${imageId}`, formData);
    
  } 

  public putPassword(password:string): Observable<any> {
    return this.http.put<any>(`${this.endpoint}/clients/update-password`, password);
  }
}
