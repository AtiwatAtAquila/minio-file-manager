# Elysia with Bun runtime

## Getting Started

To get started with this template, simply paste this command into your terminal:

```bash
bun create elysia ./elysia-example
```

## Development

To start the development server run:

```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.

# Postgres

start postgres container

```sh
docker compose up -d
```

Username: `postgres`
Password: `mysecretpassword`
Database: `docs`
Host: `localhost`
Port: `5432`

---

# Prisma

init prisma

```sh
bun x prisma@latest init --datasource-provider=postgresql
```

generate types

```sh
bun x prisma generate
```

```sh
bun x prisma migrate dev --name <migration name>
```

```sh
bun x prisma db push
```

```sh
bun x prisma migrate reset
```
