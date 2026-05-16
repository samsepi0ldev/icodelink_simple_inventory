import { db } from '@/lib/db'

export async function deleteStorage(storageId: number) {
  db.storage.delete({ id: storageId })
}
