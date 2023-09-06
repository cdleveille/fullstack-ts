export interface IConfig {
	HOST: string;
	IS_PROD: boolean;
	MONGO_URI: string;
	PORT: number;
}

export interface IResponse<T> {
	ok: boolean;
	status: number;
	data: T;
}

export interface IBase {
	created_at: Date;
	updated_at: Date;
}

export interface IUser extends IBase {
	username: string;
	password: string;
	email: string;
}
