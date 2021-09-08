import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TyneRoutes } from "src/app/shared/constants/url-routes";
import { RestaurantService } from "src/app/shared/services/restaurant.service";
import { OrderByRestaurants } from "../../enums/order-by-restaurants.enum";
import { SortByRestaurants } from "../../enums/sort-by-restaurants.enum";
import { SearchRestaurantRequest } from "../../models/search-restaurant-request";
import { SearchRestaurantResponse } from "../../models/search-restaurant-response";

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.scss"],
})
export class SearchResultsComponent implements OnInit {
  public restaurants: SearchRestaurantResponse[] = [];
  public orderOptions = [
    {
      id: SortByRestaurants.Rating,
      name: "Más valorados",
    },
    {
      id: SortByRestaurants.Name,
      name: "A - Z",
    },
    {
      id: SortByRestaurants.HighestPrice,
      name: "Mayor precio",
    },
    {
      id: SortByRestaurants.LowestPrice,
      name: "Menor precio",
    },
  ];

  public constructor(
    private restaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private activeRoute: ActivatedRoute
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
        id: restaurant.id,
      },
    });
  }

  public getRestaurants(): void {
    this.restaurantService.currentRestaurant.subscribe((restaurants) => {
      if (restaurants) {
        this.restaurants = restaurants;
      } else {
        this.activatedRoute.queryParams.subscribe((x) => {
          const request: SearchRestaurantRequest = {
            name: x.name,
            dateReservation: x.dateReservation,
            state: x.state,
            sortBy: SortByRestaurants.Name,
            orderBy: OrderByRestaurants.Asc,
          };

          this.restaurantService
            .getRestaurants(request)
            .subscribe((response) => {
              this.restaurantService.restaurantsDataSource.next(response);
            });
        });
      }
    });
  }

  public orderRestaurants(value: number): void {
    this.activatedRoute.queryParams.subscribe((x) => {
      const request: SearchRestaurantRequest = {
        name: x.name,
        dateReservation: x.dateReservation,
        state: x.state,
        sortBy: value == 4 ? SortByRestaurants.HighestPrice : value,
        orderBy:
          value == SortByRestaurants.HighestPrice
            ? OrderByRestaurants.Desc
            : value == SortByRestaurants.LowestPrice
            ? OrderByRestaurants.Asc
            : value == SortByRestaurants.Name
            ? OrderByRestaurants.Asc
            : OrderByRestaurants.Desc,
      };

      this.restaurantService.getRestaurants(request).subscribe((response) => {
        this.restaurantService.restaurantsDataSource.next(response);
        // this.router.navigate([], {
        //   relativeTo: this.activeRoute,
        //   queryParams: {
        //     name: request.name,
        //     dateReservation: request.dateReservation,
        //     state: request.state,
        //     orderBy: request.orderBy,
        //     sortBy: request.sortBy,
        //   },
        //   queryParamsHandling: "merge",
        // });
      });
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
