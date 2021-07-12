import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-restaurant',
  templateUrl: './search-restaurant.component.html',
  styleUrls: ['./search-restaurant.component.scss']
})
export class SearchRestaurantComponent implements OnInit {

  public counter = [1,2,3,4,5,6,7,8,9];

  constructor() { }

  ngOnInit() {
  }

}
