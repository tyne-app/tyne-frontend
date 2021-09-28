import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { InvokeDialogAuthService } from "src/app/shared/helpers/invoke-dialog-auth.service";
import { TokenService } from "src/app/shared/helpers/token.service";
import { TyneRoutes } from "src/app/shared/inmutable/enums/url-routes";
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
  public isUserLogged = false;

  public isFavorite = false;
  public branches = ["Juan y medio Santiago", "Juan y medio Providencia", "Juan y medio Las Condes"];

  public constructor(private router: Router, private tokenService: TokenService, private dialogAuthService: InvokeDialogAuthService) {}

  public ngOnInit(): void {
    this.validateSession();
  }

  public ngOnChanges(): void {
    this.getSchedule();
    this.getRatings();
  }

  public onFavoriteIconClick(): void {
    this.isFavorite = !this.isFavorite;
  }

  public redirectToMenu(): void {
    const isTokenValid = this.tokenService.isTokenValid();

    if (isTokenValid) {
      this.router.navigate(["/" + TyneRoutes.ClientMenu], {
        queryParams: {
          id: this.restaurant.id,
        },
      });
    } else {
      this.dialogAuthService.openLogin();
    }
  }

  private getRatings(): void {
    if (this.restaurant && this.restaurant?.id > 0) {
      const rating = Math.round(this.restaurant?.rating);
      this.ratingsArray = new Array(rating);
      this.noRatingsArray = new Array(5 - this.ratingsArray.length);
    }
  }

  private getSchedule(): void {
    if (this.schedule.length <= 0) {
      return;
    }

    this.restaurant?.schedule_list.map((x) => {
      this.schedule.push({
        name: this.getDay(x.day),
        openingHour: x.opening_hour.slice(0, 5),
        closingHour: x.closing_hour.slice(0, 5),
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

  private validateSession() {
    this.isUserLogged = this.tokenService.isTokenValid();
  }
}
