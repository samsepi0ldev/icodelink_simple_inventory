import { MapPin, Package, Smartphone } from 'lucide-react'

import {
  OverviewCard,
  OverviewCardContent,
  OverviewCardDescription,
  OverviewCardTitle,
} from '@/components/overview-card'
import { useOverview } from '@/features/overview/hooks/use-overview'

export function InventoryStats() {
  const { overview, isLoading, isError } = useOverview()

  if (isLoading || isError) return null

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:space-x-4 px-4 gap-y-4">
      <OverviewCard>
        <div className="size-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center">
          <Smartphone className="size-4" />
        </div>
        <OverviewCardContent>
          <OverviewCardTitle>{overview.totalParts}</OverviewCardTitle>
          <OverviewCardDescription>Tipos de Peças</OverviewCardDescription>
        </OverviewCardContent>
      </OverviewCard>

      <OverviewCard>
        <div className="size-12 rounded-xl bg-green-500/10 text-green-600 flex items-center justify-center">
          <Package className="size-4" />
        </div>
        <OverviewCardContent>
          <OverviewCardTitle>{overview.inStock}</OverviewCardTitle>
          <OverviewCardDescription>Total em Estoque</OverviewCardDescription>
        </OverviewCardContent>
      </OverviewCard>

      <OverviewCard>
        <div className="size-12 rounded-xl bg-violet-500/10 text-violet-600 flex items-center justify-center">
          <MapPin className="size-4" />
        </div>
        <OverviewCardContent>
          <OverviewCardTitle>{overview.totalStorages}</OverviewCardTitle>
          <OverviewCardDescription>Locais Cadastrados</OverviewCardDescription>
        </OverviewCardContent>
      </OverviewCard>
    </div>
  )
}
