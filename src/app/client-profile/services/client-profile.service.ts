/**
 * ANGULAR CORE
 */
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DataResponse } from "@shared/interfaces/token";
/**
 *REACTIVE
 */
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
/**
 * INTERFACES
 */

/**
 *ENVIRONMENT
 */
import { environment } from "src/environments/environment";
@Injectable()
export class ClientProfileService {
  private endpoint = environment.apiClients;

  public constructor(private http: HttpClient) {}

  public getImageProfile(): Observable<string> {
    return this.http.get<DataResponse>(`${this.endpoint}/clients/image`).pipe(
      map((res) => {
        return res.data;
      })
    );
  }

  public putImageProfile(imageProfile: File): Observable<any> {
    const imageProfileFile: FormData = new FormData();
    imageProfileFile.append("fileName", imageProfile, imageProfile.name);
    return this.http.put<any>(
      `${this.endpoint}/clients/image`,
      imageProfileFile
    );
  }

  public putPassword(passwordToUpdate:string): Observable<any> {
    return this.http.put(`${this.endpoint}/clients/update-password`, { password : passwordToUpdate });
  }
}
