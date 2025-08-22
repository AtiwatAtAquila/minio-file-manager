import { Elysia } from "elysia";
import { FilesController } from "./features/files/files.controller";
import swagger from "@elysiajs/swagger";

const app = new Elysia()
	.use(
		swagger({
			path: "/docs",
		}),
	)
	.use(FilesController.filesController)
	.get("/", () => "Hello Elysia")
	.listen(3000);
console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port} successfully`,
);
