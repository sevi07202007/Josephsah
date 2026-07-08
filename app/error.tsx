'use client'

import { RotateCcw } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md rounded-lg border border-white/10 bg-slate-950/80 p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Portfolio error
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-white">Something needs a quick refresh.</h1>
        <p className="mt-3 text-sm leading-6 text-slate-300">{error.message}</p>
        <Button className="mt-6" onClick={reset}>
          <RotateCcw size={16} />
          Try again
        </Button>
      </div>
    </main>
  )
}
