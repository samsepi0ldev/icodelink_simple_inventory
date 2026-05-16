import type React from 'react'
import { cn } from '@/lib/utils'

export function Label({ className, ...props }: React.ComponentProps<'label'>) {
  return (
    <label
      className={cn(
        "uppercase text-text-h text-xs block data-active:after:content-['*'] data-active:after:text-red-500 data-active:after:ml-1",
        className,
      )}
      {...props}
    />
  )
}
