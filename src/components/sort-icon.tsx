import {
  ChevronDown,
  ChevronsUpDown,
  ChevronUp,
  type LucideProps,
} from 'lucide-react'
import { cn } from '@/lib/utils'

export type SortState = 'none' | 'ascending' | 'descending'

export function SortIcon({ state, className, ...props }: SortIcon.Props) {
  if (state === 'ascending')
    return <ChevronUp className={cn('text-accent', className)} {...props} />
  if (state === 'descending')
    return <ChevronDown className={cn('text-accent', className)} {...props} />

  return <ChevronsUpDown className={cn('text-text', className)} {...props} />
}

export namespace SortIcon {
  export type Props = LucideProps & {
    state: SortState
  }
}
