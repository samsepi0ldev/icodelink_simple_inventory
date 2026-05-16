import { Layers } from 'lucide-react'

import { InventoryStats } from '@/features/overview/components/inventory-stats'
import { CreatePartsCard } from '@/features/parts/components/create-parts-card'
import { ListParts } from '@/features/parts/components/list-parts'
import { CreateStorageCard } from '@/features/storage/components/create-storage-card'

export function App() {
  return (
    <div className="w-full h-dvh">
      <div className="border-b border-b-border w-full">
        <header className="container mx-auto h-14 grid grid-cols-3 items-center px-4">
          <h1 className="text-text-h font-bold text-lg flex items-center gap-2">
            <Layers className="size-6" /> Storage
          </h1>
          <nav className="flex items-center justify-center">
            <a
              href="#/"
              className="w-fit text-text-h rounded-md flex py-1.5 px-3 text-base items-center gap-2 [&>svg]:size-4 hover:bg-social-bg transition-all"
            >
              Inventario
            </a>
            <a
              href="#/"
              className="w-fit text-text-h rounded-md flex py-1.5 px-3 text-base items-center gap-2 [&>svg]:size-4 hover:bg-social-bg transition-all"
            >
              Clientes
            </a>
            <a
              href="#/"
              className="w-fit text-text-h rounded-md flex py-1.5 px-3 text-base items-center gap-2 [&>svg]:size-4 hover:bg-social-bg transition-all"
            >
              Serviços
            </a>
          </nav>
        </header>
      </div>
      <main className="container mx-auto pt-10">
        <InventoryStats />

        <div className="grid grid-cols-2 pt-10 space-x-4">
          <CreateStorageCard />
          <CreatePartsCard />
        </div>

        <ListParts />
      </main>
    </div>
  )
}
