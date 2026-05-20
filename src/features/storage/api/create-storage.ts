import { createActivityHistory } from '@/features/activity-history/api/create-activity-history'
import type { CreateStorage } from '@/features/storage/schemas/storage-schema'

import { db } from '@/lib/db'

export async function createStorage(data: CreateStorage) {
  const storage = db.storage.create(data)

  createActivityHistory({
    type: 'created',
    description: `Novo local de armazenamento cadastrado: "${storage.name}".`,
  })
}
