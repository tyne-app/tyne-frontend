import { Injectable } from '@angular/core';
import { AccountType } from '@app/business/business-registration/shared/interfaces/account-type';
import { AccountSpin } from '@app/shared/interfaces/common/account-spin';
import { FavoritePlace } from '@app/shared/interfaces/common/favorite-place';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessMockService {

  private favoritePlaces: FavoritePlace[] = [
    { id: 1, name: "Interior"},
    { id: 2, name: "Exterior"}
  ];

  private accountSpins: AccountSpin[] = [
    { name: "Restaurante"},
    { name: "Restobar"},
    { name: "Cafetería"}
  ]

  private accountTypes: AccountType[] = [
    { id: 1, name: "Vista"},
    { id: 2, name: "Corriente"}
  ];

  public constructor() { }

  public getBusinessFavoriteLocationMock(): Observable<FavoritePlace[]>{
    return of(this.favoritePlaces);
  }

  public getAccountSpinMock(): Observable<AccountSpin[]>{
    return of(this.accountSpins);
  }

  public getAccountTypeMock(): Observable<AccountType[]>{
    return of(this.accountTypes);
  }

}
