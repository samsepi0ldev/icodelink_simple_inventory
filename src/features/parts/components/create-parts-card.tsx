import { Package } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardIcon,
  CardTitle,
} from '@/components/card'

import { CreatePartForm } from '@/features/parts/components/create-part-form'

export function CreatePartsCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-2">
          <CardIcon>
            <Package />
          </CardIcon>
          <CardTitle>Cadastrar Peça</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CreatePartForm />
      </CardContent>
    </Card>
  )
}
