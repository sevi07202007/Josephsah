import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

import { LinkButton } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <section className="w-full max-w-md rounded-lg border border-white/10 bg-slate-950/80 p-8 text-center shadow-2xl shadow-slate-950/30">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-white">Page not found</h1>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          The page you opened does not exist. Return to the portfolio homepage to continue reviewing
          the work.
        </p>
        <LinkButton href="/" className="mt-6">
          <ArrowLeft size={16} />
          Back home
        </LinkButton>
        <Link href="/#work" className="mt-4 block text-sm text-slate-400 hover:text-cyan-200">
          View featured projects
        </Link>
      </section>
    </main>
  )
}
