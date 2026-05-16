import { db } from '@/lib/db'

export async function deletePart(partId: number) {
  db.parts.delete({ id: partId })
}
