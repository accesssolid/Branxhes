import { sensitiveData } from "./src/constants/Sensitive/sensitiveData";

export enum Mode {
  PROD = "PROD",
  DEV = "DEV",
}

export interface Config {
  mode: Mode;
  devUrl: string;
  devFileUrl: string;
  prodUrl: string;
  prodFileUrl: string;
  devStripeKey: string;
  prodStripeKey: string;
  googleMapKey: string;
}

export const config: Config = {
  mode: Mode.DEV,

  // Development
  devUrl: sensitiveData.devApiUrl,
  devFileUrl: sensitiveData.devApiUrl,

  // Production
  prodUrl: sensitiveData.devApiUrl,
  prodFileUrl: sensitiveData.devFileUrl,

  // Stripe Dev Key
  devStripeKey: "",

  // Stripe Prod Key
  prodStripeKey: "",

  // GoogleMapKey
  googleMapKey: "",
};
