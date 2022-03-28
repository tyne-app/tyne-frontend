import { Component, OnInit } from "@angular/core";
import { BusinessService } from "@app/business/shared/services/business.service";
import { RestaurantAccount } from "@app/shared/interfaces/restaurant/restaurant-account";

@Component({
  selector: "app-business-profile",
  templateUrl: "./business-profile.component.html",
  styleUrls: ["./business-profile.component.scss"],
})
export class BusinessProfileComponent implements OnInit {
  public account: RestaurantAccount = null;
  public constructor(private BusinessService : BusinessService) {}

  public ngOnInit(): void {
    this.getRestaurantAccount();
  }

  private getRestaurantAccount () {
    this.BusinessService.getBusinessAccount().subscribe(account => {
      this.account = account;
    });
  }


}
