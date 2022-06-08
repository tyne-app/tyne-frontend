import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginResponse } from "@app/auth/shared/interfaces/token";
import { environment } from "@src/environments/environment";
import { Observable } from "rxjs";



@Injectable({
  providedIn: "root",
})
export class UserService {
  private urlBase = environment.apiTyne;

  public constructor(private http: HttpClient) {}

  public login(email: string, password?: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.urlBase}/users/login`, { email, password });
  }

  public socialLogin(email: string, token: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.urlBase}/users/social-login`, { email, token });
  }
  
  public putImageProfile(imageProfile: File): Observable<any> {
    const imageProfileFile: FormData = new FormData();
    imageProfileFile.append("image", imageProfile, imageProfile.name);
    return this.http.post<any>(`${this.urlBase}/users/profile-image`, imageProfileFile);
  }

  public putUserPassword(passwordToUpdate: string): Observable<any> {
    return this.http.put(`${this.urlBase}/users/password`, { password: passwordToUpdate });
  }

  public sendEmailToRecoverPassword(email:string): Observable<any>{
    return this.http.post(`${this.urlBase}/users/password/send-email`,{email});
  }
  
  public restorePassword(password:string,token:string):Observable<any>{
    const Authorization = token;
    return this.http.put(`${this.urlBase}/users/password/restore`,{password},{
      headers: {Authorization}
    });
  }

  public retryActivation(email:string): Observable<any>{
    return this.http.post(`${this.urlBase}/users/activation/retry`,{email});
  }

  public activation(token:string): Observable<any>{
    const Authorization = token;
    return this.http.post(`${this.urlBase}/users/activation`,null,{ headers: {Authorization}});
  }

  public logout(): void {
    sessionStorage.clear();
    localStorage.clear();
  }
}
