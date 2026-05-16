import { MapPin } from 'lucide-react'

import {
  Card,
  CardContent,
  CardHeader,
  CardIcon,
  CardTitle,
} from '@/components/card'
import { CreateStorageForm } from '@/features/storage/components/create-storage-form'
import { ListStorages } from '@/features/storage/components/list-storages'

export function CreateStorageCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-2">
          <CardIcon>
            <MapPin />
          </CardIcon>
          <CardTitle>Gerenciar Locais</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-col">
        <div>
          <CreateStorageForm />
        </div>

        <ListStorages />
      </CardContent>
    </Card>
  )
}
