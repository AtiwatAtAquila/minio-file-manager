import { Elysia } from 'elysia';
import { HealthService } from './health.service';
import type { Redis } from 'ioredis';
import type { Client as MinioClient } from 'minio';

export const healthRoutes = (redis: Redis, minio: MinioClient) => {
  const healthService = new HealthService(redis, minio);

  return new Elysia({ prefix: '/health', tags: ['Health'] })
    .get('/', async () => {
      return await healthService.check();
    });
};
