import type { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/lib/utils'

export function Card({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={cn(
        'rounded-lg border border-white/10 bg-slate-950/70 shadow-2xl shadow-slate-950/20',
        className,
      )}
      {...props}
    />
  )
}
