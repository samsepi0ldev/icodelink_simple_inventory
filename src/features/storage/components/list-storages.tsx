import { Trash2 } from 'lucide-react'

import { EmptyStorage } from '@/features/storage/components/empty-storage'
import { useDeleteStorage } from '@/features/storage/hooks/storage-mutations'
import { useStorage } from '@/features/storage/hooks/storage-queries'

export function ListStorages() {
  const { data: storages } = useStorage()
  const deleteStorage = useDeleteStorage()

  if (!storages?.length) {
    return <EmptyStorage />
  }

  return (
    <ul className="flex flex-wrap gap-2 items-center justify-center">
      {storages?.map((storage) => (
        <li
          key={storage.id.toString()}
          className="flex items-center justify-center gap-1.5 rounded-md py-1.5 pr-2.5 pl-3 bg-social-bg text-text border border-border"
        >
          {storage.name}
          <button
            type="button"
            className="text-text hover:text-red-400"
            onClick={() => deleteStorage.mutate(storage.id)}
          >
            <Trash2 className="size-4" />
          </button>
        </li>
      ))}
    </ul>
  )
}
