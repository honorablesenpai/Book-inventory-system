# Book Inventory System

A comprehensive backend API for managing book inventory across multiple schools.

## Features

- Book Management
- Author Management
- Publisher Management
- School Management
- Inventory Tracking
- Duplicate Detection

## Tech Stack

- NestJS
- TypeORM
- PostgreSQL (Supabase)
- JWT Authentication
- TypeScript

## Installation

```bash
npm install
```

## Configuration

Create a `.env` file with your Supabase connection string:

```
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.eupxbgwpbrnjipnwsuuv.supabase.co:5432/postgres
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
PORT=3000
```

## Running the Application

```bash
# Development
npm run start:dev

# Production
npm run build
npm run start:prod
```

The API will be available at `http://localhost:3000`

## Health Check

```
GET http://localhost:3000/health
```

## Project Structure

```
src/
├── entities/          # Database entities
├── modules/           # Feature modules
├── app.module.ts      # Main module
├── app.controller.ts  # Main controller
├── app.service.ts     # Main service
└── main.ts           # Entry point
```

## Next Steps

1. Run `npm install`
2. Configure `.env` with your Supabase credentials
3. Run `npm run start:dev` to start development server
4. Begin building modules and entities

## License

MIT
