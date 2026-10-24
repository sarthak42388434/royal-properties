# Royal Properties Kanpur

Premium real estate consultancy website for Kanpur, Uttar Pradesh, India.

## Business Information

- **Name:** Royal Properties Kanpur
- **Address:** 117/H-1/379, Asthana Bazar, Pandu Nagar, Kakadeo, Kanpur, Uttar Pradesh 208005, India
- **Phone:** +91 78975 00605
- **Services:** Property Buying, Selling, and Rental Assistance

## Tech Stack

- **Framework:** React 19 + Vite 7
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion
- **Routing:** Wouter
- **Data Fetching:** TanStack React Query
- **Backend:** Supabase (self-hosted or cloud)

## Installation

```bash
# Install dependencies (workspace root)
pnpm install

# Navigate to web app
cd artifacts/royal-properties

# Set up environment
cp .env.example .env
# Edit .env with your Supabase credentials
```

## Development

```bash
cd artifacts/royal-properties
pnpm dev
```

Open http://localhost:5173

## Build

```bash
pnpm build
```

Output: `artifacts/royal-properties/dist/`

## Type Checking

```bash
pnpm typecheck
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_SUPABASE_URL` | Yes | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Yes | Supabase anonymous key |

## Database Schema

See `supabase-setup.sql` for the complete database schema.

## Admin Access

Admin panel at `/admin` - credentials configured via Supabase Auth.

## Deployment

### Vercel

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Self-hosted

Build output is static files in `dist/`. Serve with any static file server.

## License

MIT
