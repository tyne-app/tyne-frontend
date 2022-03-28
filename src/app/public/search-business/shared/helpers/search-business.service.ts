import { Injectable } from '@angular/core';
import { SortByRestaurants } from '../enums/sort-by-restaurants.enum';
import { OrderOption } from '../interfaces/order-option';

@Injectable({
  providedIn: 'root'
})
export class SearchBusinessService {

  private orderOptions: OrderOption[] = [
    // {id: SortByRestaurants.Rating, name: "Más valorados" },
    { id: SortByRestaurants.Name, name: "A - Z",},
    { id: SortByRestaurants.HighestPrice,name: "Mayor precio"},
    { id: SortByRestaurants.LowestPrice, name: "Menor precio"}
  ];

  public getOrderOption(): OrderOption[] {
    return this.orderOptions;
  }


}
