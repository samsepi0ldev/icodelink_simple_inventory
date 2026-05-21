import { Search } from 'lucide-react'
import { useQueryState } from 'nuqs'

import { Input, InputGroup, InputGroupAddon } from '@/components/input'

export function SearchParts() {
  const [search, setSearch] = useQueryState('search', { defaultValue: '' })
  return (
    <InputGroup>
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <Input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Buscar por peça ou local..."
      />
    </InputGroup>
  )
}
