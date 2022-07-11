import { Response } from "express";

import { IResponse } from "@shared";

import { CommonError } from "../types/errors";

export const sendSuccess = <T>(res: Response, data: T) => {
	res.status(200).send({
		ok: true,
		status: 200,
		data
	} as IResponse<T>);
};

export const sendError = <T extends CommonError>(res: Response, error: T) => {
	res.status(error.status).send({
		ok: false,
		status: error.status,
		data: error.message
	} as IResponse<string>);
};
