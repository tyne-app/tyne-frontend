import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/app/shared/interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  register(client: Client) {

    return new Promise( resolve => {

      this.http.post('https://ms-user-gestor.herokuapp.com/createUser', client)
               .subscribe( async resp => {
                console.log(resp);
              });

    });

  }

}
