FROM oven/bun:1 AS builder
WORKDIR /app
RUN apt-get update -y && apt-get install -y openssl
COPY ./package.json ./
RUN bun i
COPY . .
RUN bun x prisma generate
RUN bun run build
# CMD [ "bun", "start" ]

FROM oven/bun:1 AS app
WORKDIR /app
RUN apt-get update -y && apt-get install -y openssl
COPY ./package.json ./
RUN bun install --production
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/src/providers/database/generated /app/src/providers/database/generated
CMD [ "bun", "start" ]
