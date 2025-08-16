import type { Redis } from 'ioredis';
import type { Client as MinioClient } from 'minio';
import prisma from '../../providers/database/database.provider';
import type { DependencyHealth, HealthCheckResponse, HealthStatus } from './health.types';

export class HealthService {
  private redis: Redis;
  private minio: MinioClient;

  constructor(redis: Redis, minio: MinioClient) {
    this.redis = redis;
    this.minio = minio;
  }

  private async checkDatabase(): Promise<DependencyHealth> {
    try {
      await prisma.$queryRaw`SELECT 1`;
      return { status: 'ok' };
    } catch (error) {
      return {
        status: 'error',
        details: error instanceof Error ? error.message : 'Unknown database error'
      };
    }
  }

  private async checkRedis(): Promise<DependencyHealth> {
    try {
      await this.redis.ping();
      return { status: 'ok' };
    } catch (error) {
      return {
        status: 'error',
        details: error instanceof Error ? error.message : 'Unknown Redis error'
      };
    }
  }

  private async checkMinio(): Promise<DependencyHealth> {
    try {
      await this.minio.listBuckets();
      return { status: 'ok' };
    } catch (error) {
      return {
        status: 'error',
        details: error instanceof Error ? error.message : 'Unknown MinIO error'
      };
    }
  }

  async check(): Promise<HealthCheckResponse> {
    const [database, redis, minio] = await Promise.all([
      this.checkDatabase(),
      this.checkRedis(),
      this.checkMinio()
    ]);

    const status: HealthStatus = (database.status === 'ok' &&
      redis.status === 'ok' &&
      minio.status === 'ok') ? 'ok' : 'error';

    return {
      status,
      timestamp: new Date().toISOString(),
      dependencies: {
        database,
        redis,
        minio
      }
    };
  }
}
