import { Elysia, t } from "elysia";
import { fileSchema } from "./files.schema";
import { FilesController } from "./files.controller";

export const filesRoutes = new Elysia({ prefix: "/files" })
  .post(
    "/",
    ({ body, set }) => FilesController.create(body, set),
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
  .get(
    "/",
    () => FilesController.findAll(),
    { tags: ["Files"] },
  )
  .get(
    "/:id",
    ({ params, set }) => FilesController.findById(params.id, set),
    {
      params: t.Object({ id: t.String() }),
      tags: ["Files"],
    },
  )
  .patch(
    "/:id",
    ({ params, body, set }) => FilesController.update(params.id, body, set),
    {
      params: t.Object({ id: t.String() }),
      body: t.Partial(fileSchema),
      tags: ["Files"],
    },
  )
  .delete(
    "/:id",
    ({ params, set }) => FilesController.deleteById(params.id, set),
    {
      params: t.Object({ id: t.String() }),
      tags: ["Files"],
    },
  );
