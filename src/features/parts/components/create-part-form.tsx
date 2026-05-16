import { standardSchemaResolver } from '@hookform/resolvers/standard-schema'
import { PlusCircle } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '@/components/button'
import { FieldError, FieldGroup, FieldLabel } from '@/components/field'
import { Input } from '@/components/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select'
import { useCreateParts } from '@/features/parts/hooks/parts-mutations'
import {
  type CreateParts,
  partsSchema,
} from '@/features/parts/schemas/parts-schema'
import { useStorage } from '@/features/storage/hooks/storage-queries'

export function CreatePartForm() {
  const { data: storages } = useStorage()
  const createParts = useCreateParts()

  const { control, handleSubmit } = useForm<CreateParts>({
    resolver: standardSchemaResolver(partsSchema),
    defaultValues: {},
  })

  async function handleCreateParts(data: CreateParts) {
    await createParts.mutate(data)
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreateParts)}
      className="grid grid-cols-3 gap-4 w-full"
    >
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState }) => (
          <FieldGroup
            data-invalid={fieldState.invalid}
            className="col-span-3 space-y-2"
          >
            <FieldLabel data-active>Nome da Peça</FieldLabel>
            <Input
              data-invalid={fieldState.invalid}
              {...field}
              placeholder="Ex: Tela iPhone 13, Bateria Samsung A52..."
            />
            <FieldError errors={[fieldState.error]} />
          </FieldGroup>
        )}
      />

      <Controller
        control={control}
        name="storageId"
        render={({ field, fieldState }) => (
          <FieldGroup
            data-invalid={fieldState.invalid}
            className="col-span-1 space-y-2"
          >
            <FieldLabel data-active>Local</FieldLabel>
            <Select
              disabled={storages?.length === 0}
              onValueChange={field.onChange}
            >
              <SelectTrigger
                data-invalid={fieldState.invalid}
                className="w-full"
              >
                <SelectValue placeholder="Selecione uma local" />
              </SelectTrigger>
              <SelectContent sideOffset={4} align="start" position="popper">
                <SelectGroup>
                  {storages?.map((storage) => (
                    <SelectItem key={storage.id} value={String(storage.id)}>
                      {storage.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <FieldError errors={[fieldState.error]} />
            {storages?.length === 0 && (
              <FieldError className="text-orange-400 text-xs">
                Cadastre um local primeiro.
              </FieldError>
            )}
          </FieldGroup>
        )}
      />

      <Controller
        control={control}
        name="quantity"
        render={({ field, fieldState }) => (
          <FieldGroup
            data-invalid={fieldState.invalid}
            className="col-span-2 space-y-2"
          >
            <FieldLabel data-active>Quantidade</FieldLabel>
            <Input
              {...field}
              data-invalid={fieldState.invalid}
              placeholder="1"
            />
            <FieldError errors={[fieldState.error]} />
          </FieldGroup>
        )}
      />
      <Button>
        <PlusCircle />
        Adicionar Peça
      </Button>
    </form>
  )
}
