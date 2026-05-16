import { db } from '@/lib/db'

export async function getAllParts() {
  return db.parts.findMany({})
}
