import { Injectable } from '@angular/core';
import { SearchResultsModel } from 'src/app/pages/search-restaurant/search-results/search-results.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }

  public getRestaurantsByFilterMock(orderBy: string): SearchResultsModel[] {

    // we'll need to call the real service

    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit Ab suscipit, reiciendis hic quia sunt laborum ducimus qui eum magnam consequuntur Ipsa beatae ad pariatur dolorum iure quasi, consequatur unde labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.";

    const results: SearchResultsModel[] = [
      new SearchResultsModel(true, "Viking resto", 4, 105, 3290, 25990, description),
      new SearchResultsModel(false, "Los hermanos", 4, 80, 4890, 18950, description),
      new SearchResultsModel(false, "Mamut", 4, 78, 5990, 18690, description),
      new SearchResultsModel(false, "Bariloche", 1, 12, 4990, 25980, description),
      new SearchResultsModel(true, "La Piojera", 2, 20, 1990, 19890, description),
      new SearchResultsModel(false, "Argentinian club", 3, 50, 7890, 14790, description),
      new SearchResultsModel(false, "Café Torres", 4, 68, 1290, 10990, description),
      new SearchResultsModel(true, "Juan y Medio", 5, 101, 5890, 16590, description),
      new SearchResultsModel(false, "La Piscola", 5, 120, 12990, 28990, description),
    ];

    switch (orderBy) {
      case "1":
        results.sort((a, b) => (a.rating > b.rating ? -1 : 1));
        break;
      case "2":
        results.sort((a, b) => (a.recomendations > b.recomendations ? -1 : 1));
        break;
      case "3":
        results.sort((a, b) => (a.name < b.name ? -1 : 1));
        break;
      case "4":
        results.sort((a, b) => (a.higherPrice > b.higherPrice ? -1 : 1));
        break;
      default:
        results.sort((a, b) => (a.lowestPrice < b.lowestPrice ? -1 : 1));
        break;
    }

    return results;
  }
}
