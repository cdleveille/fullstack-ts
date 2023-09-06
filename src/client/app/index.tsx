import "../css/style.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { io } from "socket.io-client";

import { Index } from "@pages";
import { IConfig } from "@shared";

const registerServiceWorker = async () => {
	if (!navigator.serviceWorker) return;
	if (!navigator.serviceWorker.controller) {
		await navigator.serviceWorker.register("sw.js");
		console.log("new service worker registered");
	} else console.log("active service worker found");
};

const socket = io();
socket.on("config", (config: IConfig) => config.IS_PROD && registerServiceWorker());

window.addEventListener("load", async () => {
	socket.emit("config");
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Index />
	</React.StrictMode>
);
