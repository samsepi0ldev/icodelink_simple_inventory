import { db } from '@/lib/db'

export async function getAllStorages() {
  return db.storage.findMany({})
}
