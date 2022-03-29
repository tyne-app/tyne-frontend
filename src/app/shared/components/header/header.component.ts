import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TokenService } from "@app/auth/shared/helpers/token.service";
import { UserType } from "@app/shared/inmutable/enums/user-type.enum";
import { TyneRoutes } from "@app/shared/inmutable/enums/url-routes.enum";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() public isWhiteLogo = true;
  public isUserLoggedIn = false;
  public isUserBusiness = false;
  public imageRoute = `/${TyneRoutes.Home}`; 

  public constructor(private router: Router, private tokenService: TokenService) {}

  public ngOnInit(): void {
    this.verifyIfUserIsLoggedIn();
    this.verifyIsUserIsBusiness();
  }

  public redirectToBranchRegistration(): void {
    this.router.navigate([TyneRoutes.BusinessNewBranch]);
  }

  private verifyIfUserIsLoggedIn(): void {
    const isTokenValid = this.tokenService.isTokenValid();
    this.isUserLoggedIn = isTokenValid;
  }

  private verifyIsUserIsBusiness(): void {
    const token = this.tokenService.getDecodedJwtToken();
    if (token) {
      this.isUserBusiness = token.rol === UserType.Manager;
      this.imageRoute = this.isUserBusiness ? `/${TyneRoutes.BusinessHome}` : `/${TyneRoutes.Home}`;
    }
  }
}
