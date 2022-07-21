import { Component } from "@angular/core";
import { StepImage } from "../../interfaces/step-image";
// importaciones provisorias
import { ViewChild } from "@angular/core";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { TokenService } from "@app/auth/shared/helpers/token.service";
import { SearchRestaurantRequest } from "@app/public/search-business/shared/interfaces/search-restaurant-request";
import { SortByRestaurants } from "@app/public/search-business/shared/enums/sort-by-restaurants.enum";
import { OrderByRestaurants } from "@app/public/search-business/shared/enums/order-by-restaurants.enum";
import { SearchBusinessService } from "./../../../../search-business/shared/helpers/search-business.service";
import { BusinessService } from "@app/business/shared/services/business.service";
import { SearchRestaurantResponse } from "@app/public/search-business/shared/interfaces/search-restaurant-response";
import { OrderOption } from "@app/public/search-business/shared/interfaces/order-option";

@Component({
  selector: "app-step",
  templateUrl: "./step.component.html",
  styleUrls: ["./step.component.scss"],
})
export class StepComponent {
  public stepImages: StepImage[] = [
    {
      title: "1. Elige un local: el más cercano o el que prefieras.",
      imageUrl: "assets/icons/one-choose-local.svg",
    },
    {
      title: "2. Elige la comida y dinos para cuantos es la mesa.",
      imageUrl: "assets/icons/two-choose-food.svg",
    },
    {
      title: "3. Haz tu reserva, paga y espera a que llegue el día.",
      imageUrl: "assets/icons/three-doing-reservation.svg",
    },
    {
      title: "4. Anda al local y disfruta sin preocupaciones.",
      imageUrl: "assets/icons/four-go-to-local.svg",
    },
  ];

  // Codigo a continuacion es provisorio
  public isUserLogged = false;
  public restaurantsResponse: SearchRestaurantResponse;
  public selectedOption = 0;
  public resultForPage = 10;
  public page = 1;
  public response = false;
  public orderOptions: OrderOption[] = [];
  @ViewChild("paginator")
  public paginator: MatPaginator;
  public constructor(
    private tokenService: TokenService,
    private BusinessService: BusinessService,
    private searchBusinessService: SearchBusinessService,
  ) {}

  public ngOnInit(): void {
    this.validateSession();
    this.response = false;
    this.getRestaurants(this.page, this.resultForPage, 1);
  }

  private validateSession() {
    this.isUserLogged = this.tokenService.isTokenValid();
  }

  public getRestaurants(page: number, result_for_page: number, type: number): void {
    this.resultForPage = 10;
    this.page = 1;

    const request: SearchRestaurantRequest = {
      result_for_page: result_for_page,
      page: page,
      name: "",
      dateReservation: "",
      state: 0,
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
  }

  public isRestaurantsEmpty(): boolean {
    return this.restaurantsResponse == null || this.restaurantsResponse.data.length === 0;
  }

  public orderRestaurants(value: number, type: number, page: number): void {
    this.resultForPage = 10;
    this.page = 1;

    const request: SearchRestaurantRequest = {
      result_for_page: this.resultForPage,
      page: this.page,
      name: "",
      dateReservation: "",
      state: 0,
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
  }

  // private setOrderOptions() {
  //   this.orderOptions = this.searchBusinessService.getOrderOption();
  //   this.activatedRoute.queryParams.subscribe((x) => {
  //     this.selectedOption = +x.sortBy;
  //   });
  // }

  public OnPageChange(event: PageEvent): void {
    this.resultForPage = event.pageSize;
    this.page = event.pageIndex + 1;
    this.response = false;
    this.getRestaurants(this.page, this.resultForPage, 0);
  }
}
