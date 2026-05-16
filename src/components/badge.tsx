import type React from 'react'

import { cn } from '@/lib/utils'

export function Badge({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        'relative inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-sm border border-transparent font-medium outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background h-5.5 min-w-5.5 text-sm sm:h-4.5 sm:min-w-4.5 sm:text-xs',
        className,
      )}
      {...props}
    />
  )
}
