import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ClientProfileService {
  private endpoint = environment.apiClients;

  public constructor(private http: HttpClient) {}

  public putImageProfile(imageProfile: File): Observable<any> {
    const imageProfileFile: FormData = new FormData();
    imageProfileFile.append("fileName", imageProfile, imageProfile.name);
    return this.http.put<any>(`${this.endpoint}/clients/image`, imageProfileFile);
  }

  public putPassword(passwordToUpdate: string): Observable<any> {
    return this.http.put(`${this.endpoint}/clients/update-password`, { password: passwordToUpdate });
  }
}
