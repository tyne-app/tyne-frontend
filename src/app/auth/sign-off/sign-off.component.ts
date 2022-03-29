import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "@app/core/services/user.service";
import { TyneRoutes } from "@app/shared/inmutable/enums/url-routes.enum";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-sign-off",
  templateUrl: "./sign-off.component.html",
  styleUrls: ["./sign-off.component.scss"],
})
export class SignOffComponent implements OnInit {
  public constructor(
    private userService: UserService,
    private router: Router,
    public signOffRef: MatDialogRef<SignOffComponent>
  ) {}

  public ngOnInit(): void {}

  public signOff(): void {
    this.signOffRef.close();
    this.goToRoute(TyneRoutes.Home);
    this.userService.logout();
  }

  public cancel(): void {
    this.signOffRef.close();
  }

  private goToRoute(routename: string): void {
    if (this.router.url === `/${routename}`) {
      window.location.reload();
    }
    this.router.navigate([`${routename}`]);
  }
}
