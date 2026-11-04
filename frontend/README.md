# Complaint & Appeal Management — Frontend

Next.js 15 / React 19 / TypeScript frontend for the Complaint & Appeal Management System.

## Run locally
```bash
npm ci
cp .env.sample .env.local
# Set NEXT_PUBLIC_API_URL to your Django API base URL
npm run dev
```

Default API URL: `http://localhost:8000/api`.

## Authentication
The sign-in page calls `POST /login/` and validates the returned JWT access token with `GET /auth/me/`. The authenticated user's group determines the initial route. Protected application routes revalidate the session against the backend.

## Languages
English (`en`), Amharic (`am`) and Afaan Oromoo (`om`). Translation resources are maintained in `src/lib/i18n.ts`.

## Before production
Use HTTPS, rotate exposed secrets, configure the Django production settings, enforce authorization on the backend, and replace browser localStorage token storage with a secure HttpOnly session approach.
