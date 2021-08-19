import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-business-details-body",
  templateUrl: "./business-details-body.component.html",
  styleUrls: ["./business-details-body.component.scss"],
})
export class BusinessDetailsBodyComponent implements OnInit {
  public isFavorite = false;
  public branches = [
    "Juan y medio Santiago",
    "Juan y medio Providencia",
    "Juan y medio Las Condes",
  ];

  public constructor() {}

  public ngOnInit(): void {
    //
  }

  public onFavoriteIconClick(): void {
    this.isFavorite = !this.isFavorite;
  }
}
