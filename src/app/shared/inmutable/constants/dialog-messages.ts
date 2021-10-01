import { DialogModel } from "../../components/components/dialog/models/dialog-model";
import { ErrorMessages } from "../enums/error-messages";
import { InformationMessages } from "../enums/infomation-messages";
import { SuccessMessages } from "../enums/success-messages";
import { TyneRoutes } from "../enums/url-routes";

export const errorContent: DialogModel = {
  title: ErrorMessages.WeAreSorry,
  subtitle: ErrorMessages.GenericError,
  isSuccessful: false,
  messageButton: "Volver",
};

export const passwordClientUpdatedContent: DialogModel = {
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
  redirectTo: TyneRoutes.ClientProfile,
};
