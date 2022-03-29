import { RangoPrecio } from "./price-range";
import { Section } from "./section";

export interface GetMenuDto {
    sections: Section[];
    branch_id: number;
    nombre_local: string;
    rango_precio: RangoPrecio;
    rating: number;
}



