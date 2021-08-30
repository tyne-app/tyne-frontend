export class SearchResultsModel {
  public isFavorite: boolean;
  public name: string;
  public rating: number;
  public lowestPrice: number;
  public higherPrice: number;
  public description: string;

  public constructor(
    isFavorite: boolean,
    name: string,
    rating: number,
    lowestPrice: number,
    higherPrice: number,
    description: string
  ) {
    this.isFavorite = isFavorite;
    this.name = name;
    this.rating = rating;
    this.lowestPrice = lowestPrice;
    this.higherPrice = higherPrice;
    this.description = description;
  }

  public getRatingsArray(): Array<number> {
    return new Array(this.rating);
  }

  public getNotRatingsArray(): Array<number> {
    return new Array(5 - this.rating);
  }
}
