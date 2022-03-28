import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TyneRoutes } from '@app/shared/inmutable/enums/url-routes.enum';
import { SearchRestaurant } from '../../interfaces/search-restaurant-response';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent implements OnInit {
   
  @Input() public business!:SearchRestaurant

  public constructor(
    private router:Router
  ) { }

  public ngOnInit(): void {
  }

  public redirectToBusinessDetail(restaurant: SearchRestaurant): void {
    this.router.navigate(["/" + TyneRoutes.BusinessDetail], {
      queryParams: {
        id: restaurant.branch_id,
      },
    });
  }

}
