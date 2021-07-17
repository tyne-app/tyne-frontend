import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-restaurant',
  templateUrl: './search-restaurant.component.html',
  styleUrls: ['./search-restaurant.component.scss']
})
export class SearchRestaurantComponent implements OnInit {

  public restaurants = [{
    isFavorite: true
  },
  {
    isFavorite: false
  },
  {
    isFavorite: false
  },
  {
    isFavorite: false
  },
  {
    isFavorite: false
  },
  {
    isFavorite: false
  }];

  constructor() { }

  ngOnInit() {
  }

  public onFavoriteIconClick(index: number) {
    this.restaurants[index].isFavorite = !this.restaurants[index].isFavorite;
  }

}
