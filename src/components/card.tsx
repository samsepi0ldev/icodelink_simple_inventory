import type React from 'react'
import { cn } from '@/lib/utils'

export function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-code-bg p-6 space-y-4',
        className,
      )}
      {...props}
    />
  )
}

export function CardHeader({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'grid auto-rows-min items-start gap-1 has-data-[slot=card-action]:grid-cols-[1fr_auto]',
        className,
      )}
      {...props}
    />
  )
}

export function CardIcon({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'bg-blue-500/10 size-6 [&>svg]:text-blue-600 [&>svg]:size-4 flex items-center justify-center rounded-lg ',
        className,
      )}
      {...props}
    />
  )
}

export function CardTitle({ className, ...props }: React.ComponentProps<'h1'>) {
  return (
    <h1
      className={cn('text-text-h font-semibold text-md', className)}
      {...props}
    />
  )
}

export function CardContent({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return <div className={cn('flex gap-4 w-full', className)} {...props} />
}

export function CardAction({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className,
      )}
      {...props}
    />
  )
}
