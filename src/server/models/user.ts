import { model, Schema } from "mongoose";

import { IBaseModel, IUser } from "../types/abstract";
import { BaseSchema } from "./_base";

const UserSchema = new Schema<IUser>({
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
}).add(BaseSchema);

export const User = model<IUser, IBaseModel<IUser>>("User", UserSchema);
