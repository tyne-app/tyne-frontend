import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private completeRating: number = 5;

  public constructor() {}

  public countRating(rating:number){
    return new Array(Math.round(rating));
  }

  public countNoRating(rating:number){
    return new Array(this.completeRating - this.countRating(Math.round(rating)).length);
  }

}
