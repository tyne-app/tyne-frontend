import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TokenService } from '@app/auth/shared/helpers/token.service';
import { ClientResponse } from '@app/client/shared/interfaces/client_response';
import { Observable } from 'rxjs';
import { ClientService } from '../services/client.service';

@Injectable({
  providedIn: 'root'
})
export class ClientResolver implements Resolve<Observable<ClientResponse>> {

 public constructor(
  private clientService: ClientService,
  private tokenService: TokenService
 ) { }

 public resolve(): Observable<ClientResponse> {
  const token = this.tokenService.getDecodedJwtToken();
  if(token){
    return this.clientService.getById(token.id_branch_client);
  }
 } 



}
