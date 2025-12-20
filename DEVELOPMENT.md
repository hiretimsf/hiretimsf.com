# Development

This guide provides instructions on how to set up and run the project locally.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/hiretimsf/hiretimsf.com.git
cd hiretimsf.com
```

### 2. Install dependencies

```bash
npm install
# or
pnpm install
```

### 3. Configure Environment Variables

Create a `.env.local` file based on `env.template`:

```bash
cp env.template .env.local
```

Then, update the necessary environment variables inside `.env.local`.

**Required variables:**
- `RESEND_API_KEY` - Get from [Resend](https://resend.com/)

**Optional variables:**
- `CONTACT_EMAIL` - Email address for contact form submissions
- `NEXT_PUBLIC_POSTHOG_KEY` - PostHog analytics key
- `NEXT_PUBLIC_BASE_URL` - Base URL for the application

### 4. Run the development server

```bash
npm run dev
# or
pnpm dev
```

The application should now be available at [http://localhost:3000](http://localhost:3000)

## Building for Production

```bash
npm run build
# or
pnpm build
```

After building, start the application with:

```bash
npm run start
# or
pnpm start
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format:check` - Check code formatting with Prettier
- `npm run format:write` - Format code with Prettier
- `npm run check-types` - Type-check with TypeScript
- `npm run validate-seo` - Validate SEO configuration
- `npm run audit` - Check for security vulnerabilities

