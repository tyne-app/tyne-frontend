export interface Token {
  id_user: number;
  id_branch_client: number;
  rol:number;
  name:string;
  last_name:string;
  ip:string;
  iss:string;
  iat: number;
  exp:number;
}



export interface LoginResponse {
  access_token: string;
}
