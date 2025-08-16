import { Elysia } from 'elysia';
import { healthRoutes } from './health/health.routes';
import type { Redis } from 'ioredis';
import type { Client as MinioClient } from 'minio';

export const app = (redis: Redis, minio: MinioClient) => {
  return new Elysia({ prefix: '/api/v1' })
    .use(healthRoutes(redis, minio));
};