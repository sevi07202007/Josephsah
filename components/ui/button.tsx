import Link from 'next/link'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-slate-50 text-slate-950 shadow-[0_18px_60px_rgba(255,255,255,0.18)] hover:bg-white',
  secondary:
    'border border-white/15 bg-white/[0.06] text-slate-100 hover:border-white/30 hover:bg-white/[0.1]',
  ghost: 'text-slate-200 hover:bg-white/[0.08]',
}

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: ButtonVariant
}

type LinkButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  children: ReactNode
  variant?: ButtonVariant
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300',
        variants[variant],
        className,
      )}
      {...props}
    />
  )
}

export function LinkButton({ className, variant = 'primary', ...props }: LinkButtonProps) {
  return (
    <Link
      className={cn(
        'inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300',
        variants[variant],
        className,
      )}
      {...props}
    />
  )
}
