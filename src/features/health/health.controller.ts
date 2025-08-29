import { Elysia } from "elysia";
import { PrismaClient } from "../../providers/database/generated";
import { createClient } from "redis";
import { Client } from 'minio';

const prisma = new PrismaClient();
const redis = createClient({
  socket: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
  },
});

const minioClient = new Client({
    endPoint: process.env.MINIO_ENDPOINT || 'localhost',
    port: parseInt(process.env.MINIO_PORT || '9000', 10),
    useSSL: process.env.MINIO_USE_SSL === 'true',
    accessKey: process.env.MINIO_ACCESS_KEY || 'minioadmin',
    secretKey: process.env.MINIO_SECRET_KEY || 'minioadmin',
});

async function checkDatabaseStatus() {
  try {
    await prisma.$connect();
    return 'ok';
  } catch (error) {
    console.error('Database connection failed:', error);
    return 'error';
  } finally {
    await prisma.$disconnect();
  }
}

async function checkRedisStatus() {
  try {
    await redis.ping();
    return 'ok';
  } catch (error) {
    console.error('Redis connection failed:', error);
    return 'error';
  }
}

async function checkMinioStatus() {
  try {
    await minioClient.listBuckets();
    return 'ok';
  } catch (error) {
    console.error('MinIO connection failed:', error);
    return 'error';
  }
}

export const healthController = new Elysia({ prefix: '/health' })
    .get('/', async () => {
        const [dbStatus, redisStatus, minioStatus] = await Promise.all([
            checkDatabaseStatus(),
            checkRedisStatus(),
            checkMinioStatus(),
        ]);

        const overallStatus =
            dbStatus === 'ok' && redisStatus === 'ok' && minioStatus === 'ok' ? 'ok' : 'error';
        const responseStatus = overallStatus === 'ok' ? 200 : 503;

        const responseBody = {
            status: overallStatus,
            version: '1.0.0',
            dependencies: {
                database: dbStatus,
                redis: redisStatus,
                minio: minioStatus,
            },
        };
        return new Response(JSON.stringify(responseBody), {
            status: responseStatus, 
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }, {
        detail: {
        tags: ['Health'],
        summary: 'Health Check Endpoint',
        description: 'Checks the status of the API and its dependencies.',
        },
    });