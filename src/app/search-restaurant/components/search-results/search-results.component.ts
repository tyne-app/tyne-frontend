import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { TyneRoutes } from "src/app/shared/constants/url-routes";
import { RestaurantService } from "src/app/shared/services/restaurant.service";
import { SearchRestaurantResponse } from "../../models/search-restaurant-response";

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.scss"],
})
export class SearchResultsComponent implements OnInit {
  public restaurants: SearchRestaurantResponse[] = [];

  public constructor(
    private restaurantService: RestaurantService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.getRestaurants();
  }

  public isRestaurantsEmpty(): boolean {
    return this.restaurants == null || this.restaurants.length === 0;
  }

  public onFavoriteIconClick(index: number): void {
    this.restaurants[index].isFavorite = !this.restaurants[index].isFavorite;
  }

  public redirectToBusinessDetail(restaurant: SearchRestaurantResponse): void {
    this.router.navigate(["/" + TyneRoutes.BusinessDetail], {
      queryParams: {
        // name: restaurant.name,
        id: restaurant.id,
      },
    });
  }

  public getRestaurants(): void {
    this.restaurantService.currentRestaurant.subscribe((restaurants) => {
      if (restaurants) {
        this.restaurants = restaurants;
      } else {
        // const restaurants = this.restaurantService.getRestaurantsByFilterMock("3");
        // this.restaurantService.restaurantsDataSource.next(restaurants);
        // const request: SearchRestaurantRequest = {
        //   name: this.form.get("name").value,
        //   dateReservation: dateReservationParam,
        //   state: this.form.get("state").value,
        // };
        // this.restaurantService.getRestaurants(request).subscribe((response) => {
        //   //
        // });
      }
    });
  }

  public orderRestaurants(value: string): void {
    // const restaurants =
    //   this.restaurantService.getRestaurantsByFilterMock(value);
    // this.restaurantService.restaurantsDataSource.next(restaurants);
  }

  /**
   * TODO: Necesitamos obtener los filtros para cuando se reordene la lista
   * TODO: y para cuando se haga un refresh de la página
   */
  private getQueryParams() {
    this.activatedRoute.queryParams.subscribe((x) => {
      // this.form.get("name").setValue(x.name);
      // this.form.get("dateReservation").setValue(x.dateReservation ? new Date(x.dateReservation) : null);
      // this.form.get("state").setValue(x.state);
    });
  }

  public getRatingsArray(restaurant: SearchRestaurantResponse): Array<number> {
    return new Array(restaurant.rating ? Math.round(restaurant.rating) : 0);
  }

  public getNotRatingsArray(
    restaurant: SearchRestaurantResponse
  ): Array<number> {
    return new Array(restaurant.rating ? 5 - Math.round(restaurant.rating) : 0);
  }
}
