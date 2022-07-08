import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { InvokeDialogAuthService } from "@app/auth/shared/helpers/invoke-dialog-auth.service";
import { TokenService } from "@app/auth/shared/helpers/token.service";
import { ButtonCustom } from "@app/shared/controls/customs/buttons/shared/interfaces/button-custom";
import { RatingService, ScheduleService } from "@app/shared/helpers";
import { TyneRoutes } from "@app/shared/inmutable/enums/url-routes.enum";
import { BusinessDetailsResponse } from "../../interfaces/business-details-response";

@Component({
  selector: "app-business-details-body",
  templateUrl: "./business-details-body.component.html",
  styleUrls: ["./business-details-body.component.scss"],
})
export class BusinessDetailsBodyComponent implements OnInit {
  @Input() public restaurant: BusinessDetailsResponse = null;

  public schedule: unknown[] = [];
  public ratingsArray: number[] = [];
  public noRatingsArray: number[] = [];
  public isUserLogged = false;
  public isFavorite = false;
  public menuCustomButton: ButtonCustom = {
    buttonMaterialType: "mat-raised-button",
    buttonType: "button",
    buttonTypeClass: "btn-submit"
  };

  public constructor(
    private router: Router,
    private tokenService: TokenService,
    private dialogAuthService: InvokeDialogAuthService,
    private ratingService: RatingService,
    private scheduleService: ScheduleService
  ) {}

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
      this.ratingsArray = this.ratingService.countRating(rating);
      this.noRatingsArray = this.ratingService.countNoRating(rating);
    }
  }

  private getSchedule(): void {
    this.restaurant?.schedule.sort().forEach((x) => {
      this.schedule.push({
        name: this.getDay(x.day),
        openingHour: x.opening_hour.slice(0, 5),
        closingHour: x.closing_hour.slice(0, 5),
      });
    });
  }

  private validateSession() {
    this.isUserLogged = this.tokenService.isTokenValid();
  }

  public getDay = (dayNumber: number): string => this.scheduleService.getDay(dayNumber);

  public getDays = (dayNumber: number): string => this.scheduleService.getLetterOfDay(dayNumber);
}
