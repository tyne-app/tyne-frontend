import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search-restaurant",
  templateUrl: "./search-restaurant.component.html",
  styleUrls: ["./search-restaurant.component.scss"],
})
export class SearchRestaurantComponent implements OnInit {
  public restaurants = [
    {
      isFavorite: true,
    },
    {
      isFavorite: false,
    },
    {
      isFavorite: false,
    },
    {
      isFavorite: false,
    },
    {
      isFavorite: false,
    },
    {
      isFavorite: false,
    },
  ];

  public constructor() {}

  public ngOnInit(): void {}

  // sdfsdf
  public onFavoriteIconClick(index: number): void {
    this.restaurants[index].isFavorite = !this.restaurants[index].isFavorite;
  }
}
