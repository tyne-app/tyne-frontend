import { Component, Input, OnInit } from "@angular/core";
import { TokenService } from "src/app/shared/helpers/token.service";

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
    const isTokenValid = this.tokenService.isTokenValid();
    this.isUserLoggedIn = isTokenValid;
  }

  public getLogo(): string {
    return this.isWhiteLogo
      ? "../../assets/tyne-logo-white.png"
      : "../../assets/tyne-logo-color.png";
  }
}
