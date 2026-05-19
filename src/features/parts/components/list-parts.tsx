import { Inbox, Search, Trash2, Underline } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardIcon,
  CardTitle,
} from '@/components/card'
import { Input, InputGroup, InputGroupAddon } from '@/components/input'
import { SortIcon } from '@/components/sort-icon'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/table'
import {
  useDeletePart,
  useUpdatePart,
} from '@/features/parts/hooks/parts-mutations'
import { useParts } from '@/features/parts/hooks/parts-queries'
import type { Parts } from '@/features/parts/types/parts'
import { cn } from '@/lib/utils'

const SORT = ['none', 'ascending', 'descending'] as const

type SortType = {
  col: keyof Parts
  dir: (typeof SORT)[number]
}

export function ListParts() {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<SortType>({ col: 'name', dir: 'none' })
  const { data: parts } = useParts()
  const deletePart = useDeletePart()
  const updatePart = useUpdatePart()

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    let list = parts?.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q),
    )

    if (sort.dir !== 'none' && list !== undefined) {
      list = [...list].sort((a, b) => {
        let va = a[sort.col]
        let vb = b[sort.col]

        if (typeof va === 'string') va = va.toLowerCase()
        if (typeof vb === 'string') vb = vb.toLowerCase()

        if (va < vb) return sort.dir === 'ascending' ? -1 : 1
        if (va > vb) return sort.dir === 'ascending' ? 1 : -1

        return 0
      })
    }

    return list
  }, [parts, search, sort])

  async function handleDecrementPartQuantity(id: number, quantity: number) {
    if (quantity - 1 < 0) return
    await updatePart.mutate({ quantity: quantity - 1, id })
  }

  function handleSort(col: keyof Parts) {
    setSort((prev) => {
      const nextIndex = (SORT.indexOf(prev.dir) + 1) % SORT.length
      return {
        col,
        dir: prev.col === col ? SORT[nextIndex] : 'ascending',
      }
    })
  }

  const cols: { key: keyof Parts; label: string }[] = [
    { key: 'name', label: 'Nome da Peça' },
    { key: 'location', label: 'Local' },
    { key: 'quantity', label: 'Qtd.' },
  ]
  return (
    <Card className="mx-4 mt-10">
      <CardHeader>
        <div className="flex gap-2">
          <CardIcon>
            <Inbox />
          </CardIcon>
          <CardTitle>
            Estoque
            {!filtered?.length && (
              <Badge className="bg-blue-500/16 text-blue-500 ml-2">
                {filtered?.length}
              </Badge>
            )}
          </CardTitle>
        </div>
        <CardAction>
          <InputGroup>
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
            <Input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por peça ou local..."
            />
          </InputGroup>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {cols.map((col) => (
                <TableHead
                  key={col.key}
                  aria-sort="descending"
                  onClick={() => handleSort(col.key)}
                >
                  <span className="[&>svg]:size-4 inline-flex items-center gap-1">
                    {col.label}{' '}
                    <SortIcon
                      state={col.key === sort.col ? sort.dir : 'none'}
                    />
                  </span>
                </TableHead>
              ))}

              <TableHead className="text-right">Acoes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered?.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center px-10 py-5 text-text text-xs"
                >
                  {search
                    ? 'Nenhuma peça encontrada para essa busca.'
                    : 'Nenhuma peça cadastrada ainda.'}
                </TableCell>
              </TableRow>
            ) : (
              filtered?.map((part) => (
                <TableRow key={part.id}>
                  <TableCell>{part.name}</TableCell>
                  <TableCell>
                    <Badge className="bg-blue-500/16 text-blue-500 px-2 py-2.5 font-bold rounded-full">
                      {part.location}
                    </Badge>
                  </TableCell>
                  <TableCell
                    className={cn(
                      'font-bold',
                      part.quantity === 0 && 'text-red-500',
                    )}
                  >
                    {part.quantity}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        onClick={() =>
                          handleDecrementPartQuantity(part.id, part.quantity)
                        }
                      >
                        +- Dar baixa
                      </Button>
                      <Button onClick={() => deletePart.mutate(part.id)}>
                        <Trash2 />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
