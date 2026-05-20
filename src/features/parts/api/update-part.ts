import { createActivityHistory } from '@/features/activity-history/api/create-activity-history'
import type { UpdateParts } from '@/features/parts/schemas/parts-schema'
import { db } from '@/lib/db'

export async function updatePart({
  id,
  ...data
}: UpdateParts & { id: number }) {
  db.parts.update(data, { id })

  createActivityHistory({
    type: 'updated',
    description: `Registro da peça (ID: ${id}) foi modificado no banco de dados.`,
  })
}
