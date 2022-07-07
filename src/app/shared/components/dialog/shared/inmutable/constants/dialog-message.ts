import { DialogModel } from "@app/shared/components/dialog/shared/interfaces/dialog-model";
import { ErrorMessages } from "@app/shared/inmutable/enums/error-message.enum";
import { InformationMessages } from "@app/shared/inmutable/enums/infomation-message.enum";
import { SuccessMessages } from "@app/shared/inmutable/enums/success-message.enum";
import { TyneRoutes } from "@app/shared/inmutable/enums/url-routes.enum";

export const errorContent: DialogModel = {
  title: ErrorMessages.WeAreSorry,
  subtitle: ErrorMessages.GenericError,
  isSuccessful: false,
  messageButton: "Volver",
};

export const invalidFormContent: DialogModel = {
  title: ErrorMessages.GenericError,
  subtitle: ErrorMessages.FormNotReady,
  isSuccessful: false,
  messageButton: "Volver",
};

export const passwordUserUpdatedContent: DialogModel = {
  title: SuccessMessages.Congratulations,
  subtitle: SuccessMessages.SuccessPasswordUpdated,
  isSuccessful: true,
  messageButton: "Entendido",
};

export const passwordClientRecoverContent: DialogModel = {
  title: SuccessMessages.Congratulations,
  subtitle: SuccessMessages.SuccessPasswordUpdated,
  isSuccessful: true,
  messageButton: "Ir a mi cuenta",
};

export const registerClientContent: DialogModel = {
  title: SuccessMessages.RegiterSuccessful,
  subtitle: InformationMessages.SendEmail,
  isSuccessful: true,
  messageButton: "Ir a mi cuenta",
  redirectTo: TyneRoutes.Home,
};

export const updateMenu: DialogModel = {
  title: SuccessMessages.Update,
  subtitle: InformationMessages.UpdateMenu,
  isSuccessful: true,
  messageButton: "Entendido",
  redirectTo: TyneRoutes.ClientProfile,
};

export const unregisteredUser: DialogModel = {
  title: ErrorMessages.WeAreSorry,
  subtitle: ErrorMessages.UnregisteredUser,
  isSuccessful: false,
  messageButton: "Volver",
};
