import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { TyneRoutes } from "src/app/shared/constants/url-routes";
import { RestaurantService } from "src/app/shared/services/restaurant.service";
import { SearchResultsModel } from "../../models/search-results.model";

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.scss"],
})
export class SearchResultsComponent implements OnInit {
  public restaurants: SearchResultsModel[] = [];

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

  public redirectToBusinessDetail(): void {
    this.router.navigate(["/" + TyneRoutes.BusinessDetail], {
      queryParams: {
        name: "nombre-del-local",
        id: "1002",
      },
    });
  }

  public getRestaurants(): void {
    this.restaurantService.currentRestaurant.subscribe((restaurants) => {
      if (restaurants) {
        this.restaurants = restaurants;
      } else {
        const restaurants =
          this.restaurantService.getRestaurantsByFilterMock("3");
        this.restaurantService.restaurantsDataSource.next(restaurants);
      }
    });
  }

  public orderRestaurants(value: string): void {
    const restaurants =
      this.restaurantService.getRestaurantsByFilterMock(value);
    this.restaurantService.restaurantsDataSource.next(restaurants);
  }

  /**
   * TODO: Necesitamos obtener los filtros para cuando se reordene la lista
   * TODO: y para cuando se haga un refresh de la página
   */
  private getQueryParams() {
    this.activatedRoute.queryParams.subscribe((x) => {
      /*
       * this.form.get("name").setValue(x.name);
       * this.form.get("dateReservation").setValue(x.dateReservation ? new Date(x.dateReservation) : null);
       * this.form.get("state").setValue(x.state);
       */
    });
  }
}
