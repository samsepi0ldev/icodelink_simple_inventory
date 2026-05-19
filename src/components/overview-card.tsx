import type React from 'react'
import { cn } from '@/lib/utils'

export function OverviewCard({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex bg-zinc-100 dark:bg-social-bg p-4 rounded-xl space-x-4 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-zinc-950/30 transition-shadow',
        className,
      )}
      {...props}
    />
  )
}

export function OverviewCardContent({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return <div className={cn('flex flex-col gap-0.5')} {...props} />
}

export function OverviewCardTitle({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return <span className={cn('font-bold text-2xl')} {...props} />
}

export function OverviewCardDescription({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return <p className={cn('text-zinc-600 dark:text-text text-sm')} {...props} />
}
