import { Search } from "lucide-react"

import { Label } from "./ui/label"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "./ui/sidebar"

export function SearchForm({ ...props }) {

const potraga = [
  { title: 'Поправки', url: '/popravki' },
  { title: 'Комплетна Дијагностика', url: '/popravki/1' },
  { title: 'Сервис на Моторно Масло', url: '/popravki/2' },
  { title: 'Ревизија на Кочни Систем', url: '/popravki/3' },
  { title: 'Сервис на Гуми и Баланисирање', url: '/popravki/4' },
  { title: 'Поправка на Клима', url: '/popravki/5' },
  { title: 'Редовно Сервисирање', url: '/popravki/6' },
  { title: 'За нас', url: '#' },
  { title: 'Каде се наоѓаме?', url: '/info' },
  { title: 'Кој сме ние?', url: '/info' },
  { title: 'Контакт 070 292 293📞', url: '#' }
]

  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Пребарај..."
            className="pl-8"
            potragaOpcii={potraga}
          />
          <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  )
}
