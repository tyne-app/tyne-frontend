import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

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
