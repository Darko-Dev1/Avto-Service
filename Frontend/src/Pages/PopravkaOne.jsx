import { AppSidebar } from "../components/app-sidebar"
import { ModeToggle } from "../components/mode-toggle.jsx"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb.jsx"
import { Separator } from "../components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../components/ui/sidebar.jsx"

import '../App.css'
export default function PopravkaOne() {

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-18 shrink-0 items-center gap-2 z-50 backdrop-blur-3xl  px-4 sticky top-0">

          <img id="imgLogo" onClick={() => {window.location.href="/"}} className="w-[144px] absolute left-[50%] -translate-x-[50%] " src="https://cdn.freebiesupply.com/logos/large/2x/autoservice-logo-png-transparent.png" alt="" />  
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
            <ModeToggle/>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  <a href="/">Дома</a>
                </BreadcrumbLink>
              </BreadcrumbItem>


            </BreadcrumbList>
          </Breadcrumb>
        </header>
       
    
    <footer id="contact" className="bg-accent h-[50vh] text-black p-6 md:p-8 mt-auto flex items-center w-full">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="text-center md:text-left flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2">Контакт</h3>
                <p>📞: (070) 123-456</p>
                <p>📧: info@autoservis.mk</p>
            </div>
            <div className="text-center flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2">Локација</h3>
                <p>ул. Прилепска бр. 5</p>
                <p>1000 Скопје, Македонија</p>
            </div>
            <div className="text-center md:text-right flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2">Работно Време</h3>
                <p>Понеделник - Петок: 08:00 - 18:00</p>
                <p>Сабота: 09:00 - 14:00</p>
            </div>
        </div>
        <div className="text-center mt-6 border-t bottom-4 border-red-800 pt-4 absolute w-[96%]">
            <p className="text-sm">&copy; 2025 Авто Сервис [Ваше Име]. Сите права задржани.</p>
        </div>
    </footer>

      </SidebarInset>
    </SidebarProvider>
  )
}
