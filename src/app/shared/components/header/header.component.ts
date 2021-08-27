import { Component, Input, OnInit } from "@angular/core";
import { TokenService } from "../../helpers/token.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() public isWhiteLogo = true;
  public isUserLoggedIn = false;

  public constructor(private tokenService: TokenService) {}

  public ngOnInit(): void {
    this.verifyIfUserIsLoggedIn();
  }

  private verifyIfUserIsLoggedIn() {
    const token = this.tokenService.isTokenSavedInLocalStorage();
    this.isUserLoggedIn = token;
  }

  public getLogo(): string {
    return this.isWhiteLogo
      ? "../../assets/logo-home.png"
      : "../../assets/logo2 1.png";
  }
}
