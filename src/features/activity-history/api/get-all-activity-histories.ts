import { db } from '@/lib/db'

export function getAllActivityHistories() {
  const activities = db.activityHistory.findMany({})
  return activities
}
