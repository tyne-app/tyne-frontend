import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TyneRoutes } from "src/app/shared/constants/url-routes";

@Component({
  selector: "app-business-details-body",
  templateUrl: "./business-details-body.component.html",
  styleUrls: ["./business-details-body.component.scss"],
})
export class BusinessDetailsBodyComponent implements OnInit {
  public isFavorite = false;
  public branches = [
    "Juan y medio Santiago",
    "Juan y medio Providencia",
    "Juan y medio Las Condes",
  ];

  public constructor(private router: Router) {}

  public ngOnInit(): void {
    //
  }

  public onFavoriteIconClick(): void {
    this.isFavorite = !this.isFavorite;
  }

  public redirectToMenu(): void {
    this.router.navigate(["/" + TyneRoutes.ClientMenu], {
      queryParams: {
        id: "1002",
      },
    });
  }
}
