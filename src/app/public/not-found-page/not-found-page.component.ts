import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-not-found-page",
  templateUrl: "./not-found-page.component.html",
  styleUrls: ["./not-found-page.component.scss"],
})
export class NotFoundPageComponent {
  public constructor(public router: Router) {}

  public goToHome(): void {
    this.router.navigate(["/"]);
  }
}
