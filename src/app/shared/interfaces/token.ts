export interface Token {
  aud: string;
  iat: number;
  exp: number;
  iss: string;
  sub: string;
  uid: string;
  id_user: number;
  id_branch_client: number;
  rol: number;
  name: string;
  last_name: string;
}

export interface LoginResponse {
  access_token: string;
}
