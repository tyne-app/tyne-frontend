/**ANGULAR CORE */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
/**REACTIVE */
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { DataResponse } from 'src/app/shared/interfaces/token';
/**ENVIRONMENT */
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ClientProfileService {
  
  private endpoint = environment.API_BASE_CLIENTS; 
  
  constructor(private http: HttpClient) {}

  public getImageProfile(): Observable<string> {
    return this.http.get<DataResponse>(`${this.endpoint}/clients/image`)
            .pipe( map ( res => {
              return res.data;
            }));
  }

  public putPassword(imageId:string, imageProfile: FormData): Observable<any> {
    return this.http.put<any>(`${this.endpoint}/clients/image/${imageId}`, imageProfile);
  }

  public putImageProfile(password:string): Observable<any>{
    return this.http.put<any>(`${this.endpoint}/clients/update-password`, password);
  } 

}
