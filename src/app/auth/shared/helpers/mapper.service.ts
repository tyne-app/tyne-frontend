import { Injectable } from "@angular/core";
import { ClientSocialNetworkRequest } from "@app/client/shared/interfaces/client-social-network-request";
import { UserCredential } from "firebase/auth";

@Injectable({
  providedIn: "root",
})
export class MapperService {
  public constructor() {}

  public mapUserGoogleClient(user: UserCredential["user"], token: string): ClientSocialNetworkRequest {
    const userClient: ClientSocialNetworkRequest = {
      name: user.displayName,
      email: user.email,
      lastName: user.displayName,
      token: token,
    };
    return userClient;
  }

  public mapUserFacebookClient(user: any, token: any): ClientSocialNetworkRequest {
    const userClient: ClientSocialNetworkRequest = {
      name: user.firstName,
      email: user.email,
      lastName: user.lastName,
      token: token,
    };
    return userClient;
  }
}
