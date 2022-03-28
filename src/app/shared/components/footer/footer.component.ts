import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TokenService } from "@app/auth/shared/helpers/token.service";
import { TyneRoutes } from "@app/shared/inmutable/enums/url-routes.enum";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  public isUserLoggedIn = false;
  public privacity = `/${TyneRoutes.Privacity}`;
  public frequentQuestion = `/${TyneRoutes.FrequentQuestion}`;
  public refund = `/${TyneRoutes.Refund}`;
  public aboutUs = `/${TyneRoutes.AboutUs}`;

  public constructor(private router: Router, private tokenService: TokenService) {}

  public ngOnInit(): void {
    this.verifyIfUserIsLoggedIn();
  }

  private verifyIfUserIsLoggedIn() {
    const isTokenValid = this.tokenService.isTokenValid();
    this.isUserLoggedIn = isTokenValid;
  }

  public redirectToBusinessRegistration(): void {
    this.router.navigate([TyneRoutes.BusinessRegister]);
  }
}
