import { Elysia } from 'elysia';
import { healthRoutes } from './health/health.routes';
import { createClient } from "redis";
import type { Client as MinioClient } from 'minio';

export const app = (redis: ReturnType<typeof createClient>, minio: MinioClient) => {
  return new Elysia({ prefix: '/api/v1' })
    .use(healthRoutes(redis, minio))
};