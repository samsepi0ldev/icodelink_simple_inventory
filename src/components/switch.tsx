import * as SwitchPrimitive from '@radix-ui/react-switch'
import type React from 'react'
import { cn } from '@/lib/utils'

export function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        'relative peer group/switch inline-flex shrink-0 items-center rounded-full border border-transparent transition-all h-[18.4px] w-[32px] data-[state=checked]:bg-foreground data-[state=unchecked]:bg-code-bg',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb className="pointer-events-none block rounded-full bg-foreground transition-all size-4 group-data-[state=checked]/switch:translate-x-[calc(100%-2px)] group-data-[state=checked]/switch:bg-code-bg dark:group-data-[state=checked]/switch:bg-code-bg" />
    </SwitchPrimitive.Root>
  )
}
