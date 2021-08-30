import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { BusinessRegistrationDto } from "src/app/business-registration/models/business-registration-dto";
import { SearchResultsModel } from "src/app/search-restaurant/models/search-results.model";
import { environment } from "src/environments/environment";
import { RestClientService } from "./rest-client.service";

@Injectable({
  providedIn: "root",
})
export class RestaurantService {
  public restaurantsDataSource = new BehaviorSubject<SearchResultsModel[]>(
    null
  );
  public currentRestaurant = this.restaurantsDataSource.asObservable();

  public constructor(private restClient: RestClientService) {}

  public getRestaurantsByFilterMock(orderBy: string): SearchResultsModel[] {
    // we'll need to call the real service

    const description =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Ab suscipit, reiciendis hic quia sunt laborum ducimus qui eum magnam consequuntur Ipsa beatae ad pariatur dolorum iure quasi, consequatur unde labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.";

    const results: SearchResultsModel[] = [
      new SearchResultsModel(true, "Viking resto", 4, 3290, 25990, description),
      new SearchResultsModel(
        false,
        "Los hermanos",
        4,
        4890,
        18950,
        description
      ),
      new SearchResultsModel(false, "Mamut", 4, 5990, 18690, description),
      new SearchResultsModel(false, "Bariloche", 1, 4990, 25980, description),
      new SearchResultsModel(true, "La Piojera", 2, 1990, 19890, description),
      new SearchResultsModel(
        false,
        "Argentinian club",
        3,
        7890,
        14790,
        description
      ),
      new SearchResultsModel(false, "Café Torres", 4, 1290, 10990, description),
      new SearchResultsModel(true, "Juan y Medio", 5, 5890, 16590, description),
      new SearchResultsModel(false, "La Piscola", 5, 12990, 28990, description),
    ];

    // const results: SearchResultsModel[] = [];

    switch (orderBy) {
      case "1":
        results.sort((a, b) => (a.rating > b.rating ? -1 : 1));
        break;
      case "2":
        results.sort((a, b) => (a.name < b.name ? -1 : 1));
        break;
      case "3":
        results.sort((a, b) => (a.higherPrice > b.higherPrice ? -1 : 1));
        break;
      default:
        results.sort((a, b) => (a.lowestPrice < b.lowestPrice ? -1 : 1));
        break;
    }

    return results;
  }

  public createNewBusiness(business: BusinessRegistrationDto): Observable<any> {
    return this.restClient.post<any>(
      environment.apiLocals + "/api/local/register",
      business
    );
  }
}
