import { createLink, type LinkComponent } from '@tanstack/react-router'
import * as React from 'react'
import { cn } from '@/lib/utils'

interface BasicLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const BasicLinkComponent = React.forwardRef<HTMLAnchorElement, BasicLinkProps>(
  ({ className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        {...props}
        className={cn(
          'w-fit rounded-md flex py-1.5 px-3 text-base items-center gap-2 [&>svg]:size-4 hover:bg-zinc-200 dark:hover:bg-social-bg transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500',
          'aria-[current=page]:bg-zinc-200 dark:aria-[current=page]:bg-social-bg',
          className,
        )}
      />
    )
  },
)

const CreatedLinkComponent = createLink(BasicLinkComponent)

export const CustomLink: LinkComponent<typeof BasicLinkComponent> = (props) => {
  return <CreatedLinkComponent preload={'intent'} {...props} />
}
