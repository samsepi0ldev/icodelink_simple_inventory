import { useQuery } from '@tanstack/react-query'

import { getAllParts } from '@/features/parts/api/get-all-parts'

export function useParts() {
  return useQuery({
    queryKey: ['parts'],
    queryFn: getAllParts,
  })
}
