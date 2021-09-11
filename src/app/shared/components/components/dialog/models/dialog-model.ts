import { TyneRoutes } from "src/app/shared/inmutable/enums/url-routes";

export interface DialogModel {
  title: string;
  subtitle: string;
  isSuccessful: boolean;
  messageButton: string;
  redirectTo?: TyneRoutes;
}
