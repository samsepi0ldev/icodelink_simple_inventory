import { useMemo } from 'react'

import { useParts } from '@/features/parts/hooks/parts-queries'
import { useStorage } from '@/features/storage/hooks/storage-queries'

export function useOverview() {
  const parts = useParts()
  const storages = useStorage()

  const overview = useMemo(() => {
    const partsData = parts.data ?? []
    const storagesData = storages.data ?? []

    const inStock = parts.data?.reduce((acc, cur) => acc + cur.quantity, 0)
    return {
      totalParts: partsData.length,
      totalStorages: storagesData.length,
      inStock,
    }
  }, [parts.data, storages.data])

  return {
    overview,
    isLoading: parts.isLoading || storages.isLoading,
    isError: parts.isError || storages.isError,
  }
}
