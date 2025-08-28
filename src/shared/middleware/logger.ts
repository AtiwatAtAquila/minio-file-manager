import { Elysia } from 'elysia';

export const loggerMiddleware = new Elysia({ name: 'logger' })
  .onBeforeHandle(({ request, store }) => {
    store.startTime = Date.now();
    console.log(`[${new Date().toISOString()}] ==> ${request.method} ${new URL(request.url).pathname}`);
  })
  .onAfterHandle(({ request, store, set }) => {
    const duration = Date.now() - (store.startTime as number);
    console.log(`[${new Date().toISOString()}] <== ${request.method} ${new URL(request.url).pathname} - ${set.status} [${duration}ms]`);
  })
  .onError(({ request, error, store, set }) => {
    const duration = Date.now() - (store.startTime as number);
    console.error(`[${new Date().toISOString()}] <== ${request.method} ${new URL(request.url).pathname} - ${set.status} [${duration}ms]`);
    console.error(error);
  });