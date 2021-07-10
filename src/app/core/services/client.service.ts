import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/app/shared/interfaces/client';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Token } from 'src/app/shared/interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private endpoint = environment.API_BASE_CLIENTS; 
  
  constructor(private http: HttpClient) { }

  register(client: Client) {

    return new Promise( resolve => {

      this.http.post('https://ms-user-gestor.herokuapp.com/createUser', client)
               .subscribe( async resp => {
                console.log(resp);
              });

    });

  }

  login(email:string, password:string): Observable<any>{
    return this.http.post<any>(`${this.endpoint}v1/login/`, {email, password});
  }

}
