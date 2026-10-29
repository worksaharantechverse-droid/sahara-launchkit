# LaunchKit
## Ship Your First SaaS in 7 Days

**A complete Next.js 15 + Supabase + Stripe starter kit for indie hackers.**

---

## What's Included

### Core Stack
- **Next.js 15** — App Router, Server Components, React 19
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling
- **Supabase** — Auth, Database, Real-time
- **Stripe** — Payments, Subscriptions
- **Resend** — Transactional emails

### Pages & Features
| Page | Description |
|---|---|
| `/` | Landing page with hero, features, pricing |
| `/login` | Email/password + OAuth login |
| `/signup` | Registration with email verification |
| `/dashboard` | User dashboard with stats |
| `/pricing` | Pricing page with Stripe integration |
| `/settings` | Account settings |
| `/api/stripe` | Stripe webhook handler |

### Infrastructure
- SEO optimized (metadata, sitemap, robots.txt)
- Analytics ready (Plausible/Umami config)
- Email setup (Resend integration)
- Deployment configs (Vercel one-click)
- Environment variable templates

---

## Quick Start

### 1. Clone and Install
```bash
git clone <your-repo>
cd launchkit
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env.local
# Edit .env.local with your keys
```

Required variables:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
SUPABASE_SERVICE_ROLE_KEY=your-service-key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
RESEND_API_KEY=re_...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Set Up Supabase
```bash
# Run the SQL migrations
supabase db reset --db-url your-supabase-db-url
```

### 4. Set Up Stripe
```bash
# Create products in Stripe Dashboard
# Add webhook endpoint: https://your-domain.com/api/stripe
```

### 5. Run Development
```bash
npm run dev
```

Visit `http://localhost:3000`

---

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel deploy --prod
```

### Environment Variables on Vercel
Add all variables from `.env.local` to Vercel project settings.

---

## Project Structure
```
launchkit/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Landing page
│   ├── login/
│   ├── signup/
│   ├── dashboard/
│   ├── pricing/
│   └── settings/
├── src/
│   ├── components/         # Reusable UI components
│   ├── lib/                # Utilities, Supabase client
│   ├── hooks/              # Custom React hooks
│   └── types/              # TypeScript types
├── emails/                 # Email templates (Resend)
├── scripts/                # Setup and migration scripts
├── public/                 # Static assets
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
└── package.json
```

---

## Authentication Flow

1. User signs up with email
2. Verification email sent via Resend
3. User clicks link, account activated
4. Session stored in Supabase Auth
5. Protected routes check auth state

---

## Payment Flow

1. User selects plan on `/pricing`
2. Redirected to Stripe Checkout
3. Payment processed
4. Webhook updates subscription in Supabase
5. User redirected to `/dashboard`

---

## Support

- See `docs/` for detailed setup guides
- Check `scripts/setup.js` for one-click setup
- Report issues on GitHub

---

*Built for speed. Ship fast, iterate faster.*
