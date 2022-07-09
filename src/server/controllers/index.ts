import { NextFunction, Request, Response, Router } from "express";

import { IResponse } from "../types/abstract";
import { Routes } from "../types/constants";

export const router = Router();

router.get(Routes.api, async (req: Request, res: Response, next: NextFunction) => {
	try {
		return res.status(200).send({
			ok: true,
			status: 200,
			data: "Hello World!"
		} as IResponse);
	} catch (error) {
		next(error);
	}
});
