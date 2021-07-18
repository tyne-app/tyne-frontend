import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { SearchResultsModel } from './search-results.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  public restaurants: SearchResultsModel[] = [];

  constructor(
    private restaurantService: RestaurantService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getRestaurants();
  }

  public onFavoriteIconClick(index: number) {
    this.restaurants[index].isFavorite = !this.restaurants[index].isFavorite;
  }

  public getRestaurants(value: string = "3") {
    this.restaurants = this.restaurantService.getRestaurantsByFilterMock(value);

    this.snackBar.open('No existen resultados para la búsqueda', 'Aceptar', {
      duration: 3000,
      panelClass: ['error-snackbar']
    });
  }
}
