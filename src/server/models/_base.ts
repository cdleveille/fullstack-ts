import { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

import { IBase } from "../types/abstract";

export const baseSchema = new Schema<IBase>({
	_id: {
		type: String,
		default: uuidv4()
	},
	created_at: {
		type: Date,
		default: () => Date.now(),
		immutable: true
	},
	updated_at: {
		type: Date,
		default: () => Date.now()
	}
});
