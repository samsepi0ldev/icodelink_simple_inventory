import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type React from 'react'
import { Toaster } from 'sonner'

const queryClient = new QueryClient()

export function Providers({ children }: Providers.Props) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster
        closeButton
        theme="dark"
        position="top-center"
        style={
          {
            '--normal-bg': 'var(--popover)',
            '--normal-text': 'var(--popover-foreground)',
            '--normal-border': 'var(--border)',
            '--border-radius': 'var(--radius)',
          } as React.CSSProperties
        }
      />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export namespace Providers {
  export type Props = {
    children: React.ReactNode
  }
}
