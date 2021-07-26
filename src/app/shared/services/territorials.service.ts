import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GenericDataResponse } from '../interfaces/generic-data-response';
import { State } from '../interfaces/state';
import { RestClientService } from './rest-client.service';

@Injectable({
  providedIn: 'root'
})
export class TerritorialsService {

  private urlBase = environment.apiBackoffice;

  constructor(
    private client: RestClientService
  ) { }

  public getStates(idcity: number) {
    const url = this.urlBase + `v1/territorials/city/${idcity}/states`;
    return this.client.get<GenericDataResponse<State[]>>(url)
      .pipe(map(res => {
        return res.data
      })
      )
  }
}
