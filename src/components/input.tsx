import type React from 'react'
import { cn } from '@/lib/utils'

export function Input({ className, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      className={cn(
        'w-full rounded-lg bg-zinc-300 dark:bg-bg placeholder-zinc-600 px-2.5 py-1.5 outline-none ring-2 ring-transparent hover:ring-violet-500 focus-visible:ring-violet-500 text-sm data-[invalid=true]:ring-red-500',
        className,
      )}
      {...props}
    />
  )
}

export function InputGroup({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'relative flex h-8 w-full min-w-0 items-center has-data-[slot=input-addon]:[&>input]:pl-8',
        className,
      )}
      {...props}
    />
  )
}

export function InputGroupAddon({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-addon"
      className={cn(
        'absolute left-2 [&>svg]:size-4 [&>svg]:text-zinc-600 flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-xs font-medium select-none',
      )}
      {...props}
    />
  )
}
