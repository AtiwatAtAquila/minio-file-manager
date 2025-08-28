import { Elysia } from 'elysia';

export const errorHandler = new Elysia({ name: 'errorHandler' })
    .onError(({ error, set }) => {
        console.error(error);
        set.status = 500;
        return {
            message: 'Internal Server Error',
        };
    });