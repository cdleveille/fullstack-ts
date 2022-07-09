export interface IResponse {
	ok: boolean;
	status: number;
	data: any;
}

export interface IBase {
	_id: string;
	created_at: Date;
	updated_at: Date;
}

export interface IUser extends IBase {
	username: string;
	password: string;
	email: string;
}
