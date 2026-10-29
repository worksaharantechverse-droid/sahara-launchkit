'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState<number | null>(null)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            New: Next.js 15 + React 19 Support
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Ship Your First SaaS{' '}
            <span className="text-blue-600">in 7 Days</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stop wasting weeks on setup. LaunchKit gives you a production-ready 
            Next.js + Supabase + Stripe starter kit. Focus on your product, not infrastructure.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/signup">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">See What's Inside</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Free forever for personal projects. No credit card required.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need to Ship Fast</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🔐',
                title: 'Authentication',
                description: 'Email/password, OAuth (Google, GitHub), session management, and protected routes built-in.'
              },
              {
                icon: '💳',
                title: 'Payments',
                description: 'Stripe integration with subscriptions, one-time payments, webhooks, and invoice generation.'
              },
              {
                icon: '🗄️',
                title: 'Database',
                description: 'Supabase PostgreSQL with Row Level Security, real-time subscriptions, and migrations.'
              },
              {
                icon: '📧',
                title: 'Email',
                description: 'Resend integration for transactional emails: welcome, password reset, invoices, and notifications.'
              },
              {
                icon: '📊',
                title: 'Analytics',
                description: 'Privacy-first analytics setup with Plausible or Umami. Track users, events, and conversions.'
              },
              {
                icon: '🚀',
                title: 'Deployment',
                description: 'One-click Vercel deploy with environment variables, preview deployments, and CI/CD ready.'
              }
            ].map((feature, i) => (
              <Card 
                key={i}
                className={`transition-all duration-200 ${isHovered === i ? 'shadow-lg scale-[1.02]' : ''}`}
                onMouseEnter={() => setIsHovered(i)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-center text-muted-foreground mb-12">Start free. Upgrade when you're ready to ship.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Starter', price: 'Free', features: ['Full code access', 'Community support', '1 project'] },
              { name: 'Pro', price: '$49', popular: true, features: ['All Starter features', 'Priority support', 'Unlimited projects', 'Deployment guide'] },
              { name: 'Business', price: '$99', features: ['All Pro features', '1-hour setup call', 'Custom modifications', 'Lifetime updates'] }
            ].map((plan, i) => (
              <Card key={i} className={`relative ${plan.popular ? 'border-blue-500 shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-blue-500">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="pt-8 text-center">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <div className="my-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== 'Free' && <span className="text-muted-foreground">/one-time</span>}
                  </div>
                  <ul className="space-y-2 text-left">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={plan.popular ? 'default' : 'outline'}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Ship?</h2>
          <p className="mb-8 opacity-90">
            Join 500+ indie hackers who launched their first product with LaunchKit.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/signup">Start Building Free</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
