import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'LaunchKit - Ship Your First SaaS in 7 Days',
    template: '%s | LaunchKit'
  },
  description: 'A complete Next.js + Supabase + Stripe starter kit. Stop wasting time on setup and start building your product.',
  keywords: ['saas', 'starter kit', 'nextjs', 'supabase', 'stripe', 'indie hacker'],
  authors: [{ name: 'Saharan TechVerse' }],
  creator: 'Saharan TechVerse',
  publisher: 'Saharan TechVerse',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://launchkit.dev',
    siteName: 'LaunchKit',
    title: 'LaunchKit - Ship Your First SaaS in 7 Days',
    description: 'A complete Next.js + Supabase + Stripe starter kit for indie hackers.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LaunchKit Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LaunchKit - Ship Your First SaaS in 7 Days',
    description: 'A complete Next.js + Supabase + Stripe starter kit for indie hackers.',
    images: ['/og-image.png'],
    creator: '@saharantechverse',
  },
  alternates: {
    canonical: 'https://launchkit.dev',
  },
  category: 'software',
  manifest: '/manifest.json',
}
