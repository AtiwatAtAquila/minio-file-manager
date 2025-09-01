import { minio } from "@/providers";
import { FilesRepository } from "./files.repository";
import { FileSchema } from "./files.schema";
import { getContentTypeFromFileType } from "@/shared/content-type";

export namespace FilesService {
	const BUCKET_NAME = "files" as const;

	export function create(
		file: Pick<FileSchema, "filename" | "filetype" | "fileSize">,
	) {
		const newFilename = Bun.randomUUIDv7();

		const isLargerThan50Mb = file.fileSize > 50 * 1024 * 1024;
		if (isLargerThan50Mb) {
			throw new Error("File size cannot be larger than 50MB");
		}

		return FilesRepository.create({
			...file,
			filename: newFilename,
		});
	}

	export function findAll(options?: { page: number; itemsPerPage: number }) {
		return FilesRepository.findAll(options);
	}

	export function findById(fileId: string) {
		return FilesRepository.findById(fileId);
	}

	export function update(
		fileId: string,
		file: Partial<Pick<FileSchema, "filename" | "filetype" | "fileSize">>,
	) {
		return FilesRepository.update(fileId, file);
	}

	export function deleteById(fileId: string) {
		return FilesRepository.deleteById(fileId);
	}

	export async function createPreSignUrl(fileId: string) {
		const file = await findById(fileId);
		if (!file) {
			return null;
		}

		const expireInSeconds = 60 * 5;
		const url = await minio.presignedPutObject(
			BUCKET_NAME,
			file.filename,
			expireInSeconds,
		);

		return {
			url,
			file,
			contentType: getContentTypeFromFileType(file.filetype),
			method: "PUT",
		};
	}
}
