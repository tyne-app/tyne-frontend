import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TyneRoutes } from "src/app/shared/inmutable/enums/url-routes";
import { RestaurantService } from "src/app/shared/services/restaurant.service";
import { BusinessDetailsResponse } from "../models/business-details-response";

@Component({
  selector: "app-business-details",
  templateUrl: "./business-details.component.html",
  styleUrls: ["./business-details.component.scss"],
})
export class BusinessDetailsComponent implements OnInit {
  public restaurant: BusinessDetailsResponse = null;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private restaurantService: RestaurantService
  ) {}

  public ngOnInit(): void {
    this.getRestaurant();
  }

  private getRestaurant() {
    this.activatedRoute.queryParams.subscribe((x) => {
      this.restaurantService.getRestaurant(+x.id).subscribe((response) => {
        if (response) {
          this.restaurant = response;
        } else {
          this.router.navigate(["/" + TyneRoutes.BusinessSearchResults], {
            queryParams: {
              id: x.id,
            },
          });
        }
      });
    });
  }
}
