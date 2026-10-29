import { loadStripe } from '@stripe/stripe-js'

let stripePromise: Promise<import('@stripe/stripe-js').Stripe | null>

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
  }
  return stripePromise
}

export const PRICING_PLANS = {
  free: {
    id: 'free',
    name: 'Free',
    price: 0,
    description: 'Perfect for getting started',
    features: [
      'Up to 100 monthly operations',
      'Basic analytics',
      'Email support',
      '1 team member'
    ]
  },
  pro: {
    id: 'pro',
    name: 'Pro',
    price: 29,
    description: 'For growing businesses',
    features: [
      'Unlimited operations',
      'Advanced analytics',
      'Priority email support',
      '5 team members',
      'Custom branding'
    ]
  },
  enterprise: {
    id: 'enterprise',
    name: 'Enterprise',
    price: 99,
    description: 'For large teams',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      'Phone support',
      'Custom integrations',
      'SLA guarantee'
    ]
  }
}

export type PricingPlan = typeof PRICING_PLANS.free | typeof PRICING_PLANS.pro | typeof PRICING_PLANS.enterprise;
