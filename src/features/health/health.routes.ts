import { Elysia, t } from "elysia";
import { getHealthStatus } from "./health.service";
import { createClient } from "redis";
import { Client as MinioClient } from "minio";

export const healthRoutes = (redis: ReturnType<typeof createClient>, minio: MinioClient) => {
  return new Elysia({ prefix: "/health", tags: ["Health"] }).get(
    "/",
    getHealthStatus(),
    {
      response: t.Object({
        status: t.Union([t.Literal("ok"), t.Literal("error")]),
        timestamp: t.String(),
      }),
    },
  );
};