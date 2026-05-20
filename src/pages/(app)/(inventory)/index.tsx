import { createFileRoute, Link } from '@tanstack/react-router'
import { Layers } from 'lucide-react'
import { Header } from '@/components/header'
import { InventoryStats } from '@/features/overview/components/inventory-stats'
import { CreatePartsCard } from '@/features/parts/components/create-parts-card'
import { ListParts } from '@/features/parts/components/list-parts'
import { CreateStorageCard } from '@/features/storage/components/create-storage-card'

export const Route = createFileRoute('/(app)/(inventory)/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <InventoryStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 pt-10 lg:space-x-4 px-4 gap-y-4">
        <CreateStorageCard />
        <CreatePartsCard />
      </div>

      <ListParts />
    </>
  )
}
