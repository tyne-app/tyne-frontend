export interface Reservation {
    address: string;
    commune:string;
    region:string;
    bill:number;
    clients: number;
    email:string;
    first_name:string;
    last_name:string;
    local_rut: string;
    payment: string;
    preference: boolean;
    social_reason:  string;
    state: number;
    timestamp:Date;
}