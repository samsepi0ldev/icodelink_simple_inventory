import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { createStorage } from '@/features/storage/api/create-storage'
import { deleteStorage } from '@/features/storage/api/delete-storage'
import type { Storage } from '@/features/storage/types/storage'

export function useCreateStorage() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createStorage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['storages'] })
      toast.success('Storage created successfully.')
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })
}

export function useDeleteStorage() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteStorage,
    onMutate: async (id: number) => {
      await queryClient.cancelQueries({ queryKey: ['storages'] })

      const previousStorages = queryClient.getQueryData<Storage[]>(['storages'])

      queryClient.setQueryData<Storage[]>(['storages'], (old) => {
        if (!old) return old
        return old.filter((storage) => storage.id !== id)
      })

      return { previousStorages }
    },
    onError: (error, _variables, context) => {
      if (context?.previousStorages) {
        queryClient.setQueryData(['storage'], context.previousStorages)
      }
      toast.error(`Error: ${error.message} => Resetting data...`)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['storages'] })
    },
    onSuccess: (_, id) => {
      toast.success(`Storage ${id} removed!`)
    },
  })
}
