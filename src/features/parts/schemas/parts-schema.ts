import z from 'zod'

export const partsSchema = z.object({
  name: z
    .string({ error: 'Name cannot be empty.' })
    .min(1, 'Name is required.'),
  storageId: z.coerce.number({ error: 'Storage ID is required.' }),
  quantity: z.coerce
    .number({ error: 'Quantity is required.' })
    .min(0, 'Quantity cannot be negative.'),
})

export const updatePartsSchema = partsSchema.partial()

export type CreateParts = z.infer<typeof partsSchema>
export type UpdateParts = z.infer<typeof updatePartsSchema>
