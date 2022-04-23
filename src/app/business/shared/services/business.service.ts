import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BusinessDetailsResponse } from "@app/business/business-details/interfaces/business-details-response";
import { BranchRegistrationDto } from "@app/business/business-new-branch/shared/interfaces/business-registration-dto";
import { AccountType } from "@app/business/business-registration/shared/interfaces/account-type";
import { BusinessRegistrationDto } from "@app/business/business-registration/shared/interfaces/business-registration-dto";
import { SearchRestaurantRequest } from "@app/public/search-business/shared/interfaces/search-restaurant-request";
import { SearchRestaurantResponse } from "@app/public/search-business/shared/interfaces/search-restaurant-response";
import { AccountSpin } from "@app/shared/interfaces/common/account-spin";
import { FavoritePlace } from "@app/shared/interfaces/common/favorite-place";
import { RestaurantAccount } from "@app/shared/interfaces/restaurant/restaurant-account";
import { environment } from "@src/environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BusinessMockService } from "../../../core/mocks/business-mock.service";

@Injectable({
  providedIn: "root",
})
export class BusinessService {
  
  public restaurantsDataSource = new BehaviorSubject<SearchRestaurantResponse>(null);
  public currentRestaurant = this.restaurantsDataSource.asObservable();
  private urlBase = environment.apiTyne;

  public constructor(private http: HttpClient, private businessMockService:BusinessMockService) {}

  public createNewBusiness(business: BusinessRegistrationDto): Observable<any> {
    return this.http.post<any>(`${this.urlBase}/business`, business);
  }

  public createNewBranch(branch: BranchRegistrationDto): Observable<any> {
    return this.http.post<any>(`${this.urlBase}/business/branches`, branch);
  }

  public getBusinessFiltered(request: SearchRestaurantRequest): Observable<SearchRestaurantResponse> {
    const url = this.urlBase + "/business/branches";
    const params = new HttpParams()
      .set("result_for_page", request.result_for_page.toString())
      .set("page", request.page.toString())
      .set("name", request.name ? request.name : "")
      .set("dateReservation", request.dateReservation ? request.dateReservation : "")
      .set("stateId", request.state.toString())
      .set("sortBy", request.sortBy.toString())
      .set("orderBy", request.orderBy.toString());

    return this.http.get<SearchRestaurantResponse>(url, { params }).pipe(
      map((res) => {
        return res;
      })
    );
  }

  public getBusinessById(id: number): Observable<BusinessDetailsResponse> {
    const url = this.urlBase + "/business/" + id;
    return this.http.get<BusinessDetailsResponse>(url);
  }

  public getBusinessAccount(): Observable<RestaurantAccount> {
    const url = this.urlBase + "/business";
    return this.http.get<RestaurantAccount>(url);
  }
  public getBusiness(): Observable<BusinessDetailsResponse> {
    const url = this.urlBase + "/business";
    return this.http.get<BusinessDetailsResponse>(url);
  }

  public getBusinessFavoriteLocation(): Observable<FavoritePlace[]>{
    return this.businessMockService.getBusinessFavoriteLocationMock();
  }

  public getBusinessAccountSpin(): Observable<AccountSpin[]>{
    return this.businessMockService.getAccountSpinMock();
  }

  public getBusinessAccountType(): Observable<AccountType[]>{
    return this.businessMockService.getAccountTypeMock();
  }

}
