import prisma from "../../providers/database/database.provider";
import { FileSchema } from "./files.schema";

export namespace FilesRepository {
	export function create(
		file: Pick<FileSchema, "filename" | "filetype" | "fileSize">,
	) {
		return prisma.file.create({
			data: {
				...file,
				minioKey: "",
			},
		});
	}

	export function findAll(
		options: { page: number; itemsPerPage: number } = {
			page: 1,
			itemsPerPage: 10,
		},
	) {
		return prisma.file.findMany({
			take: 10,
			skip: (options.page - 1) * options.itemsPerPage,
		});
	}

	export function findById(fileId: string) {
		return prisma.file.findUnique({
			where: {
				id: fileId,
			},
		});
	}

	export function update(
		fileId: string,
		file: Partial<Pick<FileSchema, "filename" | "filetype" | "fileSize">>,
	) {
		return prisma.file.update({
			where: {
				id: fileId,
			},
			data: file,
		});
	}

	export function deleteById(fileId: string) {
		return prisma.file.delete({
			where: {
				id: fileId,
			},
		});
	}
}
