import type { ActivityHistory } from '@/features/activity-history/types/activity-history'
import { db } from '@/lib/db'

export function createActivityHistory(
  data: Omit<ActivityHistory, 'id' | 'createdAt'>,
) {
  db.activityHistory.create(data)
}
