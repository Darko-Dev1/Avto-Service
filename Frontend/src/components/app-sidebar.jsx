import * as React from "react"
import { GalleryVerticalEnd, Minus, Plus } from "lucide-react"
import { House } from 'lucide-react';

import { SearchForm } from "./search-form"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "./ui/sidebar"


const data = {
  navMain: [
    {
      title: "Поправки",
      url: "",
      items: [
        {
          title: "Комплетна Дијагностика",
          url: "/popravki/1",
        },
        {
          title: "Сервис на Моторно Масло",
          url: "/popravki/2",
        },
                {
          title: "Ревизија на Кочни Систем",
          url: "/popravki/3",
        },
                {
          title: "Сервис на Гуми и Баланисирање",
          url: "/popravki/4",
        },
                {
          title: "Поправка на Клима",
          url: "/popravki/5",
        },
                {
          title: "Редовно Сервисирање",
          url: "/popravki/6",
        },
      ],
    },
    {
        title: "За нас",
        url: "#",
        items: [
          {
            title: "Каде се наоѓаме?",
            url: "/info",
          },
          {
            title: "Кој сме ние?",
            url: "/info",
          }
        ],
      },
      {
        title: "Контакт  070 292 293📞",
        url: "#", 
      },
      
    ]
}

export function AppSidebar({ ...props }) {



  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a  href="#">
                <div  className=" text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <a href="/"><House id="nice" className="size-4"  /></a>
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Мени</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item, index) => (
              <Collapsible
                key={item.title}
                defaultOpen={index === 0}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {item.title}{" "}
                      <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={item.isActive}
                            >
                              <a href={item.url}>{item.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
