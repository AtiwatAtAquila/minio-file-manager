import Elysia, { t } from "elysia";
import { fileSchema } from "./files.schema";
import { FilesService } from "./files.service";
import prisma from "@/providers/database/database.provider";

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
					console.log("error", error);
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
		})
		.post(
			"/:id/presigned-url",
			async ({ params, set }) => {
				if (params.id.length !== 36) {
					set.status = "Bad Request";
					return {
						message: "Invalid file id",
					};
				}

				try {
					const res = await FilesService.createPreSignUrl(params.id);

					if (res === null) {
						set.status = "Not Found";
						return {
							message: "File not found",
						};
					}

					const contentType = res.contentType;
					if (contentType === null) {
						set.status = "Bad Request";
						return {
							message: "File type is not supported",
						};
					}

					contentType;

					return {
						...res,
						contentType: contentType,
					};
				} catch (error) {
					set.status = "Internal Server Error"; // 500
					return {
						message: "MinIO Server or Database is not available",
					};
				}
			},
			{
				tags: ["Files"],
				params: t.Object({
					id: t.String(),
				}),
				response: {
					200: t.Object({
						url: t.String(),
						file: fileSchema,
						contentType: t.String(),
						method: t.String(),
					}),
					400: t.Object({
						message: t.String(),
					}),
					404: t.Object({
						message: t.String(),
					}),
					500: t.Object({
						message: t.String(),
					}),
				},
			},
		);
}
