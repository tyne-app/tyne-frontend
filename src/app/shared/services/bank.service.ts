import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Bank } from '../interfaces/bank';
import { GenericDataResponse } from '../interfaces/generic-data-response';
import { RestClientService } from './rest-client.service';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private urlBase = environment.apiBackoffice;

  constructor(
    private client: RestClientService
  ) { }

  public getBanks() {
    const url = this.urlBase + `v1/banks`;
    return this.client.get<GenericDataResponse<Bank[]>>(url)
      .pipe(map(res => {
        return res.data;
      })
      );
  }
}
