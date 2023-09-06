import { Server as HttpServer } from "http";
import { Server, Socket } from "socket.io";

import { Config } from "@helpers";

export const initSocket = (httpServer: HttpServer) => {
	const io = new Server(httpServer);

	io.on("connect", (socket: Socket) => {
		socket.on("config", () => {
			socket.emit("config", { IS_PROD: Config.IS_PROD });
		});
	});
};
