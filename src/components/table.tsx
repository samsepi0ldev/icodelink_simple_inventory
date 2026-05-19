import type React from 'react'
import { cn } from '@/lib/utils'

export function Table({ className, ...props }: React.ComponentProps<'table'>) {
  return (
    <div className="w-full border border-zinc-200 dark:border-border rounded-xl overflow-hidden">
      <table
        className={cn('w-full caption-bottom text-xs', className)}
        {...props}
      />
    </div>
  )
}

export function TableHeader({
  className,
  ...props
}: React.ComponentProps<'thead'>) {
  return <thead className={cn('[&_tr]:border-b', className)} {...props} />
}

export function TableBody({
  className,
  ...props
}: React.ComponentProps<'tbody'>) {
  return (
    <tbody className={cn('[&_tr:last-child]:border-0', className)} {...props} />
  )
}

export function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      className={cn(
        'border-b transition-colors border-zinc-200 hover:bg-zinc-50 dark:border-b-border dark:hover:bg-zinc-900/30',
        className,
      )}
      {...props}
    />
  )
}

export function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      className={cn(
        'px-3.5 py-2.5 align-middle whitespace-nowrap has-[[role=checkbox]]:pr-0',
        className,
      )}
      {...props}
    />
  )
}

export function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      className={cn(
        'select-none [&>svg]:size-3 [&>svg]:text-text text-left px-3.5 py-2.5 bg-zinc-50/75 hover:bg-zinc-200/50 dark:bg-zinc-950/30 dark:hover:bg-zinc-900/50 uppercase align-middle font-medium whitespace-nowrap has-[[role=checkbox]]:pr-0',
        className,
      )}
      {...props}
    />
  )
}
