import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TyneRoutes } from "src/app/shared/inmutable/enums/url-routes";
import { RestaurantService } from "@app/core/services/restaurant.service";
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
      if (!+x.id) {
        this.router.navigate(["/" + TyneRoutes.NotFound]);
        return;
      }

      this.restaurantService.getRestaurant(+x.id).subscribe((response) => {
        if (response != null && response.id > 0) {
          this.restaurant = response;
        } else {
          this.router.navigate(["/" + TyneRoutes.NotFound]);
        }
      });
    });
  }
}
