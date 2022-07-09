import { model, Schema } from "mongoose";

import { IUser } from "../types/abstract";
import { baseSchema } from "./_base";

export const User = model(
	"User",
	new Schema<IUser>({
		...baseSchema.obj,
		username: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: false
		}
	})
);
