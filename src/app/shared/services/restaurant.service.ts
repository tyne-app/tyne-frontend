import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BusinessRegistrationDto } from "src/app/business-registration/models/business-registration-dto";
import { SearchRestaurantRequest } from "src/app/search-restaurant/models/search-restaurant-request";
import { SearchRestaurantResponse } from "src/app/search-restaurant/models/search-restaurant-response";
import { environment } from "src/environments/environment";
import { GenericDataResponse } from "../interfaces/generic-data-response";

@Injectable({
  providedIn: "root",
})
export class RestaurantService {
  public restaurantsDataSource = new BehaviorSubject<
    SearchRestaurantResponse[]
  >(null);
  public currentRestaurant = this.restaurantsDataSource.asObservable();

  public constructor(private client: HttpClient) {}

  public createNewBusiness(business: BusinessRegistrationDto): Observable<any> {
    return this.client.post<any>(
      environment.apiLocals + "/api/local/register",
      business
    );
  }

  public getRestaurants(
    request: SearchRestaurantRequest
  ): Observable<SearchRestaurantResponse[]> {
    const url = environment.apiLocals + "/api/search/all-branch";

    const params = new HttpParams()
      .set("name", request.name ? request.name : "")
      .set(
        "dateReservation",
        request.dateReservation ? request.dateReservation : ""
      )
      .set("state", request.state.toString())
      .set("sortBy", request.sortBy.toString())
      .set("orderBy", request.orderBy.toString());

    return this.client
      .get<GenericDataResponse<SearchRestaurantResponse[]>>(url, { params })
      .pipe(
        map((res) => {
          return res.data;
        })
      );
  }
}
