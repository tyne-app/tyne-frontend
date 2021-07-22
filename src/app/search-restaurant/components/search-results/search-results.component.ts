import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { SearchResultsModel } from '../../models/search-results.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  public restaurants: SearchResultsModel[] = [];

  constructor(
    private restaurantService: RestaurantService,
    private snackBar: MatSnackBar,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getRestaurants();
  }

  public isRestaurantsEmpty(): boolean {
    return this.restaurants == null || this.restaurants.length === 0;
  }

  public onFavoriteIconClick(index: number) {
    this.restaurants[index].isFavorite = !this.restaurants[index].isFavorite;
  }

  public getRestaurants() {
    this.restaurantService.currentRestaurant.subscribe(restaurants => {
      if (restaurants) {
        this.restaurants = restaurants;
      } else {
        const restaurants = this.restaurantService.getRestaurantsByFilterMock("3");
        this.restaurantService.restaurantsDataSource.next(restaurants);
      }
    });
  }

  public orderRestaurants(value: string) {
    const restaurants = this.restaurantService.getRestaurantsByFilterMock(value);
    this.restaurantService.restaurantsDataSource.next(restaurants);
  }

  /**
   * TODO: Necesitamos obtener los filtros para cuando se reordene la lista
   * TODO: y para cuando se haga un refresh de la página
   */
  private getQueryParams() {
    this.router.queryParams.subscribe(x => {
      // this.form.get("name").setValue(x.name);
      // this.form.get("dateReservation").setValue(x.dateReservation ? new Date(x.dateReservation) : null);
      // this.form.get("state").setValue(x.state);
    })
  }
}
