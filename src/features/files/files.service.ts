import { FilesRepository } from "./files.repository";
import { FileSchema } from "./files.schema";

export namespace FilesService {
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
}
