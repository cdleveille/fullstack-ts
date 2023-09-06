import "dotenv/config";

import { IConfig } from "@shared";

import { Env, Host } from "../types";

export const Config = {
	IS_PROD: <boolean>(process.env.NODE_ENV === Env.prod),
	PORT: <number>parseInt(process.env.PORT || "3000"),
	HOST: <string>(process.env.NODE_ENV === Env.prod ? Host.prod : Host.dev),
	MONGO_URI: <string>process.env.MONGO_URI || "mongodb://localhost:27007/fullstack-ts"
} as IConfig;
