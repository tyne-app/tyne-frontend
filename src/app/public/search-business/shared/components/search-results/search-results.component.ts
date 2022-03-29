import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { ActivatedRoute, Router } from "@angular/router";
import { TokenService } from "@app/auth/shared/helpers/token.service";
import { BusinessService } from "@app/business/shared/services/business.service";
import { TyneRoutes } from "@app/shared/inmutable/enums/url-routes.enum";
import { OrderByRestaurants } from "../../enums/order-by-restaurants.enum";
import { SortByRestaurants } from "../../enums/sort-by-restaurants.enum";
import { SearchBusinessService } from "../../helpers/search-business.service";
import { OrderOption } from "../../interfaces/order-option";
import { SearchRestaurantRequest } from "../../interfaces/search-restaurant-request";
import { SearchRestaurant, SearchRestaurantResponse } from "../../interfaces/search-restaurant-response";

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.scss"],
})
export class SearchResultsComponent implements OnInit {
  public isUserLogged = false;
  public restaurantsResponse: SearchRestaurantResponse;
  public restaurants: SearchRestaurant[] = [];
  public selectedOption = 0;
  public resultForPage = 10;
  public page = 1;
  public response = false;
  public orderOptions: OrderOption[] = []

  @ViewChild("paginator")
  public paginator: MatPaginator;

  public constructor(
    private BusinessService: BusinessService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService,
    private searchBusinessService:SearchBusinessService
  ) {}

  public ngOnInit(): void {
    this.validateSession();
    this.setOrderOptions();
    this.response = false;
    this.getRestaurants(this.page, this.resultForPage, 1);
  }

  public isRestaurantsEmpty(): boolean {
    return this.restaurantsResponse == null || this.restaurantsResponse.data.length === 0;
  }

  public onFavoriteIconClick(index: number): void {
    this.restaurantsResponse.data[index].isFavorite = !this.restaurantsResponse.data[index].isFavorite;
  }

  public redirectToBusinessDetail(restaurant: SearchRestaurant): void {
    this.router.navigate(["/" + TyneRoutes.BusinessDetail], {
      queryParams: {
        id: restaurant.branch_id,
      },
    });
  }

  public getRestaurants(page: number, result_for_page: number, type: number): void {
    this.resultForPage = 10;
    this.page = 1;

    this.activatedRoute.queryParams.subscribe((x) => {
      const request: SearchRestaurantRequest = {
        result_for_page: result_for_page,
        page: page,
        name: x.name,
        dateReservation: x.dateReservation,
        state: x.state,
        sortBy: SortByRestaurants.Name,
        orderBy: OrderByRestaurants.Asc,
      };
      this.BusinessService.getBusinessFiltered(request).subscribe((restaurants) => {
        if (!this.response) {
          this.restaurantsResponse = restaurants;
          if (type == 1 && Object.keys(restaurants.data).length != 0) {
            setTimeout(() => ((this.paginator.pageIndex = 0), (this.resultForPage = this.paginator.pageSize)));
          }
          this.response = true;
        } else {
          if (page == 1) {
            this.restaurantsResponse = restaurants;
            if (type == 1 && Object.keys(restaurants.data).length != 0) {
              setTimeout(() => ((this.paginator.pageIndex = 0), (this.resultForPage = this.paginator.pageSize)));
            }
          }
        }
      });
    });
  }

  public orderRestaurants(value: number, type: number, page: number): void {
    this.resultForPage = 10;
    this.page = 1;

    this.activatedRoute.queryParams.subscribe((x) => {
      const request: SearchRestaurantRequest = {
        result_for_page: this.resultForPage,
        page: this.page,
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

      this.BusinessService.getBusinessFiltered(request).subscribe((restaurants) => {
        if (!this.response) {
          this.restaurantsResponse = restaurants;
          if (type == 1 && Object.keys(restaurants.data).length != 0) {
            setTimeout(() => ((this.paginator.pageIndex = 0), (this.resultForPage = this.paginator.pageSize)));
          }
          this.response = true;
        } else {
          if (page == 1) {
            this.restaurantsResponse = restaurants;
            if (type == 1 && Object.keys(restaurants.data).length != 0) {
              setTimeout(() => ((this.paginator.pageIndex = 0), (this.resultForPage = this.paginator.pageSize)));
            }
          }
        }
      });
    });
  }

  public getRatingsArray(restaurant: SearchRestaurant): Array<number> {
    const rating = Math.round(restaurant?.rating);
    return new Array(rating);
  }

  public getNotRatingsArray(restaurant: SearchRestaurant): Array<number> {
    const rating = Math.round(restaurant?.rating);
    const ratingsArray = new Array(rating);
    return new Array(5 - ratingsArray.length);
  }

  private setOrderOptions() {
    this.orderOptions = this.searchBusinessService.getOrderOption();
    this.activatedRoute.queryParams.subscribe((x) => {
      this.selectedOption = +x.sortBy;
    });
  }

  private validateSession() {
    this.isUserLogged = this.tokenService.isTokenValid();
  }

  public OnPageChange(event: PageEvent): void {
    this.resultForPage = event.pageSize;
    this.page = event.pageIndex + 1;
    this.response = false;
    this.getRestaurants(this.page, this.resultForPage, 0);
  }
}
