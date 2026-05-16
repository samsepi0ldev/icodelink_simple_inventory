import type {
  CreateParts,
  UpdateParts,
} from '@/features/parts/schemas/parts-schema'
import type { Parts } from '@/features/parts/types/parts'
import type { CreateStorage } from '@/features/storage/schemas/storage-schema'
import type { Storage } from '@/features/storage/types/storage'

export const db = {
  storage: {
    create: (data: CreateStorage) => {
      const currentData = db.storage.getAll()
      currentData.push({
        ...data,
        id: currentData.length + 1,
        createdAt: new Date().toISOString(),
      })
      localStorage.setItem('storages', JSON.stringify(currentData))
    },
    findMany: (filter: Record<string, any>) => {
      const currentData = db.storage.getAll()
      return currentData.filter((d) => {
        return Object.keys(filter).every((key) => d[key].includes(filter[key]))
      })
    },
    findFirst: (filter: Record<string, any>) => {
      const currentData = db.storage.getAll()
      return currentData.find((d) => {
        return Object.keys(filter).every((key) => {
          if (typeof filter[key] === 'number') {
            return d[key] === filter[key]
          }
          return d[key].includes(filter[key])
        })
      })
    },
    delete: (filter: Record<string, any>) => {
      const currentData = db.storage.getAll()
      const newData = currentData.filter((d) => {
        return Object.keys(filter).every((key) => d[key] !== filter[key])
      })
      localStorage.setItem('storages', JSON.stringify(newData))
    },
    getAll: () => {
      const currentData = JSON.parse(localStorage.getItem('storages')) || []

      return currentData as Storage[]
    },
  },
  parts: {
    create: (data: CreateParts) => {
      const currentData = db.parts.getAll()
      currentData.push({
        ...data,
        id: currentData.length + 1,
        createdAt: new Date().toISOString(),
      })
      localStorage.setItem('parts', JSON.stringify(currentData))
    },
    findMany: (filter: Record<string, any>) => {
      const currentData = db.parts.getAll()

      return currentData
        .filter((d) => {
          return Object.keys(filter).every((key) =>
            d[key].includes(filter[key]),
          )
        })
        .map((d) => {
          const storage = db.storage.findFirst({ id: d.storageId })
          return {
            ...d,
            location: storage.name,
          }
        })
    },
    findFirst: (filter: Record<string, any>) => {
      const currentData = db.parts.getAll()
      return currentData.find((d) => {
        return Object.keys(filter).every((key) => {
          if (typeof filter[key] === 'number') {
            return d[key] === filter[key]
          }
          return d[key].includes(filter[key])
        })
      })
    },
    delete: (filter: Record<string, any>) => {
      const currentData = db.parts.getAll()
      const newData = currentData.filter((d) => {
        return Object.keys(filter).every((key) => d[key] !== filter[key])
      })
      localStorage.setItem('parts', JSON.stringify(newData))
    },
    update: (data: UpdateParts, filter: Record<string, any>) => {
      const currentData = db.parts.getAll()
      const part = db.parts.findFirst(filter)
      const newData = {
        ...part,
        ...data,
      }

      const newUpdatedData = currentData.map((d) => {
        if (d.id === newData.id) {
          return newData
        }
        return d
      })
      localStorage.setItem('parts', JSON.stringify(newUpdatedData))
    },
    getAll: () => {
      const currentData = JSON.parse(localStorage.getItem('parts')) || []

      return currentData as Omit<Parts, 'location'>[]
    },
  },
}
