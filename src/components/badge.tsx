import type React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const badge = tv({
  base: 'relative shrink-0 inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium ring-1 h-5.5 min-w-5.5 text-sm sm:h-4.5 sm:min-w-4.5 sm:text-xs',
  variants: {
    variant: {
      default: 'dark:bg-foreground dark:text-zinc-900 bg-bg text-text-h',
      success:
        'dark:bg-emerald-500/10 dark:text-emerald-400 bg-emerald-500 text-emerald-100',
      warning:
        'dark:bg-amber-500/10 dark:text-amber-400 bg-amber-500 text-amber-100',
      danger:
        'dark:bg-rose-500/10 dark:text-rose-400 bg-rose-500 text-rose-100',
      info: 'dark:bg-blue-500/10 dark:text-blue-400 bg-blue-500 text-blue-100',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type BadgeVariants = VariantProps<typeof badge>

interface BadgeProps extends React.ComponentProps<'span'>, BadgeVariants {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={badge({ className, variant })} {...props} />
}
