import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Badge } from '@/components/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/table'
import { useActivityHistory } from '@/features/activity-history/hooks/activity-history-queries'
import { cn } from '@/lib/utils'

export function ActivityHistoryList() {
  const { data: activities } = useActivityHistory()

  const variantType: Record<
    string,
    'success' | 'danger' | 'warning' | 'default' | 'info'
  > = {
    created: 'success',
    deleted: 'danger',
    updated: 'warning',
  } as const

  function formattedDate(date: string) {
    return format(new Date(date), "EEEE, dd 'de' MMMM 'de' yyyy HH:mm", {
      locale: ptBR,
    })
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Nome da Atividade</TableHead>
          <TableHead>Data / Hora</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {activities?.map((activity) => (
          <TableRow key={activity.id}>
            <TableCell>#{activity.id}</TableCell>
            <TableCell>
              <Badge variant={variantType[activity.type]}>
                <span
                  className={cn(
                    activity.type === 'created' &&
                      'h-1.5 w-1.5 rounded-full bg-emerald-400',
                    activity.type === 'updated' &&
                      'h-1.5 w-1.5 rounded-full bg-amber-400',
                    activity.type === 'deleted' &&
                      'h-1.5 w-1.5 rounded-full bg-rose-400',
                  )}
                ></span>
                {activity.type}
              </Badge>
            </TableCell>
            <TableCell>{activity.description}</TableCell>
            <TableCell>{formattedDate(activity.createdAt)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
