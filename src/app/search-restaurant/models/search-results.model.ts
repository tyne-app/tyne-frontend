export class SearchResultsModel {
    
    public isFavorite: boolean;
    public name: string;
    public rating: number;
    public recomendations: number;
    public lowestPrice: number;
    public higherPrice: number;
    public description: string;

    constructor (
        isFavorite: boolean,
        name: string,
        rating: number,
        recomendations: number,
        lowestPrice: number,
        higherPrice: number,
        description: string) {
            this.isFavorite = isFavorite;
            this.name = name;
            this.rating = rating;
            this.recomendations = recomendations;
            this.lowestPrice = lowestPrice;
            this.higherPrice = higherPrice;
            this.description = description;
    }

    public getRatingsArray() {
        return new Array(this.rating);
    }

    public getNotRatingsArray() {
        return new Array(5 - this.rating);
    }
}
