import { Link } from '@tanstack/react-router'
import { Layers, Sun } from 'lucide-react'

import { Switch } from '@/components/switch'
import { useTheme } from '@/hooks/use-theme'
import { CustomLink } from './link'

export function Header() {
  const { toggleTheme, isDarkMode } = useTheme()
  return (
    <div className="border-b border-zinc-200 dark:border-b-border w-full">
      <header className="container mx-auto h-14 grid grid-cols-3 items-center px-4">
        <h1 className="text-zinc-900 dark:text-text-h font-bold text-lg flex items-center gap-2">
          <Layers className="size-6" /> Storage
        </h1>
        <nav className="flex items-center justify-center gap-1">
          <CustomLink to="/">Inventario</CustomLink>
          <CustomLink to="#">Clientes</CustomLink>
          <CustomLink to="#">Serviços</CustomLink>
          <CustomLink to="/activity-history">
            Histórico de atividades
          </CustomLink>
        </nav>
        <div className="flex items-center gap-x-1 justify-end">
          <Switch defaultChecked={isDarkMode} onCheckedChange={toggleTheme} />
          <Sun className="size-4 text-text peer-data-checked:text-text-h transition-colors" />
        </div>
      </header>
    </div>
  )
}
