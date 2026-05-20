import { createActivityHistory } from '@/features/activity-history/api/create-activity-history'
import { db } from '@/lib/db'

export async function deletePart(partId: number) {
  db.parts.delete({ id: partId })

  createActivityHistory({
    type: 'deleted',
    description: `Registro da peça (ID: ${partId}) foi excluído com sucesso.`,
  })
}
