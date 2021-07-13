import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

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
