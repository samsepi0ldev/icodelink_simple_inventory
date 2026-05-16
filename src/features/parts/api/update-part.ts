import type { UpdateParts } from '@/features/parts/schemas/parts-schema'
import { db } from '@/lib/db'

export async function updatePart({
  id,
  ...data
}: UpdateParts & { id: number }) {
  db.parts.update(data, { id })
}
