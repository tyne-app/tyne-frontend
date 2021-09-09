import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TyneRoutes } from "src/app/shared/constants/url-routes";
import { BusinessDetailsResponse } from "../../models/business-details-response";

@Component({
  selector: "app-business-details-body",
  templateUrl: "./business-details-body.component.html",
  styleUrls: ["./business-details-body.component.scss"],
})
export class BusinessDetailsBodyComponent implements OnInit {
  @Input()
  public restaurant: BusinessDetailsResponse = null;

  public schedule: Array<unknown> = [];
  public ratingsArray: Array<number> = [];
  public noRatingsArray: Array<number> = [];

  public isFavorite = false;
  public branches = [
    "Juan y medio Santiago",
    "Juan y medio Providencia",
    "Juan y medio Las Condes",
  ];

  public constructor(private router: Router) {}

  public ngOnInit(): void {}

  public ngOnChanges(): void {
    this.getSchedule();
    this.getRatingsArray();
    this.getNotRatingsArray();
  }

  public onFavoriteIconClick(): void {
    this.isFavorite = !this.isFavorite;
  }

  public redirectToMenu(): void {
    this.router.navigate(["/" + TyneRoutes.ClientMenu], {
      queryParams: {
        id: this.restaurant.id,
      },
    });
  }

  private getRatingsArray(): void {
    if (this.ratingsArray.length > 0) {
      return;
    }

    this.ratingsArray = new Array(
      this.restaurant?.rating ? Math.round(this.restaurant?.rating) : 0
    );
  }

  private getNotRatingsArray(): void {
    if (this.noRatingsArray.length > 0) {
      return;
    }

    this.noRatingsArray = new Array(
      this.restaurant?.rating ? 5 - Math.round(this.restaurant?.rating) : 0
    );
  }

  private getSchedule(): void {
    if (this.schedule.length > 0) {
      return;
    }

    this.restaurant?.schedule_list.map((x) => {
      this.schedule.push({
        name:
          this.getDay(x.day) + " de " + x.opening_hour + " a " + x.closing_hour,
      });
    });
  }

  private getDay(dayNumber: number): string {
    return dayNumber == 0
      ? "Lunes"
      : dayNumber == 1
      ? "Martes"
      : dayNumber == 2
      ? "Miércoles"
      : dayNumber == 3
      ? "Jueves"
      : dayNumber == 4
      ? "Viernes"
      : dayNumber == 5
      ? "Sábado"
      : "Domingo";
  }
}
