import type { Metadata, Viewport } from 'next'

import './globals.css'
import { profile } from '@/data/portfolio'

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} | Frontend & Full-Stack Developer`,
    template: `%s | ${profile.name}`,
  },
  description:
    'My portfolio showcasing frontend, React, and full-stack projects by Mark Joseph C. Teodoro.',
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Full-Stack Developer',
    'Next.js',
    'TypeScript',
    'Philippines Developer',
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} | Frontend & Full-Stack Developer`,
    description:
      'Modern portfolio with real-world projects, technical case studies, and professional engineering practices.',
    url: profile.siteUrl,
    siteName: `${profile.name} Portfolio`,
    locale: 'en_PH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} | Frontend & Full-Stack Developer`,
    description: profile.headline,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
  themeColor: '#020617',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
