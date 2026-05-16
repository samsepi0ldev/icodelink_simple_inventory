import type { CreateStorage } from '@/features/storage/schemas/storage-schema'

import { db } from '@/lib/db'

export async function createStorage(data: CreateStorage) {
  db.storage.create(data)
}
