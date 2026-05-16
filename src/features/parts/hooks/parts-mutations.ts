import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { createPart } from '@/features/parts/api/create-part'
import { deletePart } from '@/features/parts/api/delete-part'
import { updatePart } from '@/features/parts/api/update-part'
import type { Parts } from '@/features/parts/types/parts'

export function useCreateParts() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createPart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['parts'] })
      toast.success('Part created successfully.')
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })
}

export function useDeletePart() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deletePart,
    onMutate: async (id: number) => {
      await queryClient.cancelQueries({ queryKey: ['parts'] })

      const previousStorages = queryClient.getQueryData<Parts[]>(['parts'])

      queryClient.setQueryData<Parts[]>(['parts'], (old) => {
        if (!old) return old
        return old.filter((part) => part.id !== id)
      })

      return { previousStorages }
    },
    onError: (error, _variables, context) => {
      if (context?.previousStorages) {
        queryClient.setQueryData(['parts'], context.previousStorages)
      }
      toast.error(`Error: ${error.message} => Resetting data...`)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['parts'] })
    },
    onSuccess: (_, id) => {
      toast.success(`Part ${id} removed!`)
    },
  })
}

export function useUpdatePart() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updatePart,
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: ['parts'] })

      const previousStorages = queryClient.getQueryData<Parts[]>(['parts'])

      queryClient.setQueryData<Parts[]>(['parts'], (old) => {
        if (!old) return old
        return old.filter((part) => part.id !== data.id)
      })

      return { previousStorages }
    },
    onError: (error, _variables, context) => {
      if (context?.previousStorages) {
        queryClient.setQueryData(['parts'], context.previousStorages)
      }
      console.error(error, 'Resetting data...')
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['parts'] })
    },
    onSuccess: (_, part) => {
      toast.info(`Part ${part.id} updated!`)
    },
  })
}
