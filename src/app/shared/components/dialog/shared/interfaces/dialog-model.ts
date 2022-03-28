import { TyneRoutes } from "@app/shared/inmutable/enums/url-routes.enum";

export interface DialogModel {
  title: string;
  subtitle: string;
  isSuccessful: boolean;
  messageButton: string;
  redirectTo?: TyneRoutes | string;
}
