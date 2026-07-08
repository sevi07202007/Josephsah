import type { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/lib/utils'

export function Badge({ className, ...props }: ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-white/12 bg-white/[0.06] px-3 py-1 text-xs font-medium text-slate-200',
        className,
      )}
      {...props}
    />
  )
}
