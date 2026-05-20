import { useQuery } from '@tanstack/react-query'

import { getAllActivityHistories } from '@/features/activity-history/api/get-all-activity-histories'

export function useActivityHistory() {
  return useQuery({
    queryKey: ['activity-histories'],
    queryFn: getAllActivityHistories,
  })
}
