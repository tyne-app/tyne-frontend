import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TyneRoutes } from "@app/shared/inmutable/enums/url-routes.enum";
import { BusinessService } from "@app/business/shared/services/business.service";
import { BusinessDetailsResponse } from "./interfaces/business-details-response";


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
    private BusinessService: BusinessService
  ) {}

  public ngOnInit(): void {
    this.getRestaurant();
  }

  private getRestaurant(): void {
    this.activatedRoute.queryParams.subscribe((x) => {
      if (!+x.id) {
        this.router.navigate(["/" + TyneRoutes.NotFound]);
        return;
      }

      this.BusinessService.getBusinessById(+x.id).subscribe((restaurant) => {
        if (restaurant != null && restaurant.id > 0) {
          this.restaurant = restaurant;
        } else {
          this.router.navigate(["/" + TyneRoutes.NotFound]);
        }
      });
    });
  }
}
