export interface Token{
    aud: string;
    iat: number;
    exp: number;
    iss: string;
    sub: string;
    uid: string;
    claims: Claims;
}

export interface Claims {
    id: number;
    name: string;
    last_name: string;
    birth_date: Date;
    email: string;
    phone: string;
    state_id: number;
    rol: string;
}


export interface DataResponse {
    data: string;
    error: string;
}
