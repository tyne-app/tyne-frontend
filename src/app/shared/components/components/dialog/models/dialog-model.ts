import { TyneRoutes } from "src/app/shared/constants/url-routes";

export interface DialogModel {
  title: string;
  subtitle: string;
  isSuccessful: boolean;
  messageButton: string;
  redirectTo?: TyneRoutes;
}
