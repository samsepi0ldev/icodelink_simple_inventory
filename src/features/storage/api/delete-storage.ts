import { createActivityHistory } from '@/features/activity-history/api/create-activity-history'
import { db } from '@/lib/db'

export async function deleteStorage(storageId: number) {
  db.storage.delete({ id: storageId })

  createActivityHistory({
    type: 'deleted',
    description: `Usuário removeu o local de armazenamento de ID: ${storageId}.`,
  })
}
