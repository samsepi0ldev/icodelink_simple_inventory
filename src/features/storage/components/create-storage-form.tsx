import { standardSchemaResolver } from '@hookform/resolvers/standard-schema'
import { Plus } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '@/components/button'
import { FieldError, FieldGroup } from '@/components/field'
import { Input } from '@/components/input'
import { useCreateStorage } from '@/features/storage/hooks/storage-mutations'
import {
  type CreateStorage,
  createStorageSchema,
} from '@/features/storage/schemas/storage-schema'

export function CreateStorageForm() {
  const createStore = useCreateStorage()

  const { control, handleSubmit, reset } = useForm<CreateStorage>({
    resolver: standardSchemaResolver(createStorageSchema),
  })

  async function handleCreateStorage(data: CreateStorage) {
    await createStore.mutate(data)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreateStorage)}
      className="flex flex-col lg:flex-row gap-4 w-full"
    >
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState }) => (
          <FieldGroup>
            <Input
              data-invalid={fieldState.invalid}
              {...field}
              placeholder="EX: Caixa A1, Prateleira 2..."
            />
            <FieldError errors={[fieldState.error]} />
          </FieldGroup>
        )}
      />

      <Button type="submit">
        <Plus className="size-4" />
        Adicionar local
      </Button>
    </form>
  )
}
