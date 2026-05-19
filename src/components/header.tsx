import { Link } from '@tanstack/react-router'
import { Layers, Sun } from 'lucide-react'

import { Switch } from '@/components/switch'
import { useTheme } from '@/hooks/use-theme'

export function Header() {
  const { toggleTheme, isDarkMode } = useTheme()
  return (
    <div className="border-b border-zinc-200 dark:border-b-border w-full">
      <header className="container mx-auto h-14 grid grid-cols-3 items-center px-4">
        <h1 className="text-zinc-900 dark:text-text-h font-bold text-lg flex items-center gap-2">
          <Layers className="size-6" /> Storage
        </h1>
        <nav className="flex items-center justify-center">
          <Link
            to="/"
            className="w-fit rounded-md flex py-1.5 px-3 text-base items-center gap-2 [&>svg]:size-4 hover:bg-zinc-200 dark:hover:bg-social-bg transition-all"
          >
            Inventario
          </Link>
          <Link
            to="/"
            className="w-fit rounded-md flex py-1.5 px-3 text-base items-center gap-2 [&>svg]:size-4 hover:bg-zinc-200 dark:hover:bg-social-bg transition-all"
          >
            Clientes
          </Link>
          <Link
            to="/"
            className="w-fit rounded-md flex py-1.5 px-3 text-base items-center gap-2 [&>svg]:size-4 hover:bg-zinc-200 dark:hover:bg-social-bg transition-all"
          >
            Serviços
          </Link>
        </nav>
        <div className="flex items-center gap-x-1 justify-end">
          <Switch defaultChecked={isDarkMode} onCheckedChange={toggleTheme} />
          <Sun className="size-4 text-text peer-data-checked:text-text-h transition-colors" />
        </div>
      </header>
    </div>
  )
}
