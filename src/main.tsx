import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from '@/app'
import { Providers } from '@/components/provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
)
