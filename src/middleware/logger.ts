import { Elysia } from 'elysia';

export const logger = new Elysia()
  .onBeforeHandle(({ request }) => {
    console.log(`[Request] ${request.method} ${request.url}`);
  })
  .onAfterHandle(({ request, response }) => {
    console.log(`[Response] ${request.method} ${request.url} - Status: ${response.status}`);
  });