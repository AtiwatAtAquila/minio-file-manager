import Elysia, { t } from "elysia";
import { fileSchema } from "./files.schema";
import { FilesService } from "./files.service";

export namespace FilesController {
	export const filesController = new Elysia({ prefix: "/files" })
		.post(
			"/",
			async ({ body, set }) => {
				try {
					const file = await FilesService.create(body);

					set.status = "Created";
					return file;
				} catch (error: any) {
					set.status = "Internal Server Error";
					if ("message" in error) {
						return error.message;
					}
					return "Internal Server Error";
				}
			},
			{
				body: t.Omit(fileSchema, [
					"id",
					"createdAt",
					"updatedAt",
					"uploadStatus",
					"minioKey",
				]),
				tags: ["Files"],
			},
		)
		.get("/", () => {}, {
			tags: ["Files"],
		});
}
