import { createActivityHistory } from '@/features/activity-history/api/create-activity-history'
import type { CreateParts } from '@/features/parts/schemas/parts-schema'

import { db } from '@/lib/db'

export async function createPart(data: CreateParts) {
  const part = db.parts.create(data)

  createActivityHistory({
    type: 'created',
    description: `Nova peça cadastrada: "${part.name}" alocada no armazenamento de id: ${part.storageId}.`,
  })
}
