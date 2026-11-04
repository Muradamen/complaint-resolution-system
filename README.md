# Complaint & Appeal Management System

A web-based system for submitting, assigning, tracking and resolving complaints and appeals.

## Technology
- Frontend: Next.js 15, React 19, TypeScript and Tailwind CSS
- Backend: Django and Django REST Framework
- Authentication: JWT access and refresh tokens
- Languages: English, Amharic and Afaan Oromoo

## Frontend setup
1. Open the frontend directory:
   `cd frontend`
2. Install dependencies:
   `npm ci`
3. Copy `.env.sample` to `.env.local`.
4. Set `NEXT_PUBLIC_API_URL` to the Django API base URL (default: `http://localhost:8000/api`).
5. Start development:
   `npm run dev`

## Authentication API contract
- `POST /login/` with `{ "username": "...", "password": "..." }`; expected response contains `access`, `refresh`, and `role`.
- `GET /auth/me/` with `Authorization: Bearer <access>`; expected response includes user details and `user_groups`.
- Protected pages verify the access token against `/auth/me/`.

## Languages
The language selector stores the user's choice in browser local storage. The current interface languages are English, Amharic and Afaan Oromoo. Translation resources are in `frontend/src/lib/i18n.ts`.

## Security notes before deployment
- Configure the API URL for the target environment and use HTTPS.
- Store Django secrets and database credentials in server-side environment variables, never in frontend variables or source control.
- Use secure, HttpOnly, SameSite cookies or a backend-for-frontend session for production token handling. The current browser token storage is a compatibility implementation and should be hardened before production.
- Enforce role and object-level permissions in Django. Hiding navigation items is not authorization.
- Rotate any secrets that were previously committed; deleting a file does not remove its values from Git history.
- Set Django `DEBUG=False`, explicit `ALLOWED_HOSTS`, and restricted CORS/CSRF origins before deployment.

## Verification
Run `npm run build` and the backend test suite in an environment with dependencies installed and the API/database configured. A successful login and role-based access must also be tested against the running backend.
