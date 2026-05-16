import { z } from 'zod'

export const createStorageSchema = z.object({
  name: z
    .string({ error: 'Storage name cannot be empty.' })
    .min(3, 'Storage name must be at least 3 characters long.')
    .max(50, 'Storage name cannot exceed 50 characters.'),
})

export type CreateStorage = z.infer<typeof createStorageSchema>
