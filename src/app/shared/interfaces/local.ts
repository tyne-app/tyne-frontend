import { Restaurant } from "./restaurant";
import { Schedule } from "./schedule";

export interface Local {
    days: number[];
    ending_hour: string;
    opening_hour: string;
    images?: string[];
    region: string;
    commune: string;
    address: string;
    rut: string;
    type: string;
    pets: boolean;
    phone: number;
    social_reason: string;
}


/**TODO: MODIFICAR A ESTE PRONTO... */
export interface Branch {
    id: number;
    name: string;
    accept_pet: boolean; 
    commercial_activity:string;
    description: string;
    legal_representative_id:number;   
    schedule: Schedule;
    state_id:number;
    restaurant: Restaurant;
    bank_restaurant_id:number

}
