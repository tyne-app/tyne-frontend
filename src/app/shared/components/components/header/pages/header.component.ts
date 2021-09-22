import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TokenService } from "src/app/shared/helpers/token.service";
import { TyneRoutes } from "src/app/shared/inmutable/enums/url-routes";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() public isWhiteLogo = true;
  public isUserLoggedIn = false;
  public isUserBusiness = false;

  public constructor(
    private router: Router,
    private tokenService: TokenService
  ) {}

  public ngOnInit(): void {
    this.verifyIfUserIsLoggedIn();
    this.verifyIsUserIsBusiness();
  }

  public redirectToBranchRegistration(): void {
    this.router.navigate([TyneRoutes.BusinessNewBranch]);
  }

  private verifyIfUserIsLoggedIn() {
    const isTokenValid = this.tokenService.isTokenValid();
    this.isUserLoggedIn = isTokenValid;
  }

  private verifyIsUserIsBusiness() {
    const token = this.tokenService.getDecodedJwtToken();

    if (token) {
      this.isUserBusiness = token.claims.rol === "user";
    }
  }

  public getLogo(): string {
    return this.isWhiteLogo
      ? "../../assets/icons/tyne-logo-white.png"
      : "../../assets/icons/tyne-logo-color.png";
  }
}
