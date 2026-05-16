import type { CreateParts } from '@/features/parts/schemas/parts-schema'

import { db } from '@/lib/db'

export async function createPart(data: CreateParts) {
  db.parts.create(data)
}
