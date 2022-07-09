import { FilterQuery, Schema } from "mongoose";

import { IBase, IBaseModel, Options, Projection } from "../types/abstract";
import { NotFoundError } from "../types/errors";

export const BaseSchema = new Schema<IBase, IBaseModel<IBase>>({
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

BaseSchema.statics.assertFindOne = async function (
	filter?: FilterQuery<IBase>,
	options?: Options<IBase>,
	projection?: Projection
) {
	const doc = await this.findOne(filter, projection, options);
	if (!doc) throw new NotFoundError(`${this.modelName} not found`);
	return doc;
};

BaseSchema.statics.assertFind = async function (
	filter?: FilterQuery<IBase>,
	options?: Options<IBase>,
	projection?: Projection
) {
	const docs = await this.find(filter, options, projection);
	if (docs.length <= 0) throw new NotFoundError(`${this.modelName}s not found`);
	return docs;
};

BaseSchema.statics.createOrUpdate = async function (filter: FilterQuery<IBase>, doc: Partial<IBase>) {
	const exists = await this.exists(filter);
	if (!exists) return this.create(doc);
	return this.findOneAndUpdate(filter, doc, { new: true }) as unknown as IBase;
};

BaseSchema.statics.getCount = async function (filter: FilterQuery<IBase>, options?: Options<IBase>) {
	return this.find(filter, options).count();
};

BaseSchema.statics.assertExists = async function (filter: FilterQuery<IBase>, options?: Options<IBase>) {
	const count = await this.getCount(filter, options);
	if (count <= 0) throw new NotFoundError(`${this.modelName} does not exist`);
};
