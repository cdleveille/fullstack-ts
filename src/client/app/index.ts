import "../css/style.css";

window.addEventListener("load", async () => {
	if (!navigator.serviceWorker) return;
	if (!navigator.serviceWorker.controller) {
		await navigator.serviceWorker.register("sw.js");
		console.log("new service worker registered");
	} else console.log("active service worker found");
});

console.log("Hello World!");
