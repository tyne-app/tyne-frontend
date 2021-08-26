import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public isUserLoggedIn = false;

  public constructor() {}

  public ngOnInit(): void {
    this.verifyIfUserIsLoggedIn();
  }

  private verifyIfUserIsLoggedIn() {
    const token: string = localStorage.getItem("access_token");
    this.isUserLoggedIn = token != null ? true : false;
  }
}
