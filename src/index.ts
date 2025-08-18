import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from '@elysiajs/swagger';
import { healthController } from "./features/health/health.controller";
import { logger } from "./middleware/logger";

import 'dotenv/config';

const app = new Elysia()
  .get("/",
  () => "Hello Elysia")

  .use(logger)
  .use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  )
  .use(
    swagger({
      path: "/docs",
      documentation: {
        info: {
          title: 'Project API Documentation',
          version: '1.0.0',
          description: 'REST API for file management system.',
        },
        tags: [
          { name: 'Health', description: 'API status check' },
          { name: 'Files', description: 'File management operations' },
          { name: 'Roles', description: 'Role and permission management' },
        ],
      },
      // scalar: true,
    })
  )

app.onError(({ code, error }) => {
  if (code === 'NOT_FOUND') {
    return new Response('Not Found', { status: 404 });
  }
  return new Response('Internal Server Error', { status: 500 });
})

app.use(healthController);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
});

process.on('SIGINT', async () => {
  console.log('Shutting down server gracefully...');
  await app.stop();
  console.log('Server shut down successfully.');
  process.exit(0);
});
