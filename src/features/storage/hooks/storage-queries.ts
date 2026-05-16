import { useQuery } from '@tanstack/react-query'

import { getAllStorages } from '@/features/storage/api/get-all-storages'

export function useStorage() {
  return useQuery({
    queryKey: ['storages'],
    queryFn: getAllStorages,
  })
}
