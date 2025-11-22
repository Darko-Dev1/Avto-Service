import { AppSidebar } from "../../components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb.jsx"
import { Separator } from "../../components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar.jsx"

import '../../App.css'
export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-18 shrink-0 items-center gap-2 z-50 bg-white border-b px-4 sticky top-0">

          <img className="w-[144px] absolute left-[50%] -translate-x-[50%] -translate-y-1.5" src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/3b7b527518607.560acd8ccb0e9.jpg" alt="" />  
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Дома
                </BreadcrumbLink>
              </BreadcrumbItem>


            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div id="mainDivBg" className="flex flex-col gap-4 p-4 h-[100vh]  bg-black text-white">
            <div id="mainDivContent">
                <h1 className="text-5xl font-extrabold text-4xl font-extrabold text-white mb-8  border-accent pb-2 text-center"><span className="text-accent">Најдобриот</span> Авто Сервис во <span className="text-accent">Македонија</span></h1>
                <p className="text-center text-lg mt-2 text-gray-300">Вашето возило заслужува најдобра грижа. Доверете ни го!</p>
            </div>
        </div>

    <main className="flex flex-col gap-16 p-4 md:p-8">

        <section id="services" className="h-[80vh] bg-white p-6 md:p-10 rounded-lg shadow-2xl text-black">
            <h2 className="text-4xl font-extrabold text-accent mb-8 border-b-2 border-accent pb-2">Услуги што ги нудиме</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8  h-full">
                <div className="p-4 border h-[70%] border-gray-200 rounded-lg hover:border-accent transition duration-300">
                    <h3 className="text-2xl font-semibold text-black mb-2">Редовен Сервис и Одржување</h3>
                    <p className="text-gray-600">Комплетен преглед на возилото, промена на масло и филтри, проверка на течности.</p>
                </div>
                <div className="p-4 border h-[70%] border-gray-200 rounded-lg hover:border-accent transition duration-300">
                    <h3 className="text-2xl font-semibold text-black mb-2">Поправка на Мотор и Менувач</h3>
                    <p className="text-gray-600">Дијагностика и стручна поправка на сите видови мотори и трансмисии.</p>
                </div>
                <div className="p-4 border h-[70%] border-gray-200 rounded-lg hover:border-accent transition duration-300">
                    <h3 className="text-2xl font-semibold text-black mb-2">Систем за Сопирање и Подвозје</h3>
                    <p className="text-gray-600">Промена на дискови и плочки, поправка на амортизери и други компоненти на подвозјето.</p>
                </div>
            </div>
            <div className="text-center -mt-32">
                <button className="bg-accent text-white py-3 px-6 rounded-full font-bold hover:bg-red-700 transition duration-300">
                    Види ги сите услуги
                </button>
            </div>
        </section>

        <section id="about" className="text-white min-h-screen">
            <h2 className="text-4xl font-extrabold text-accent mb-6 border-b-2 border-accent pb-2">Кои сме ние</h2>
            <article className="bg-gray-900 p-6 md:p-10 rounded-lg shadow-2xl h-[70vh]">
                <p className="text-lg mb-4 leading-relaxed">
                    Ние сме тим од **сертифицирани авто-механичари** со долгогодишно искуство во поправка и одржување на сите марки и модели на возила. Нашата мисија е да обезбедиме безбедност и доверба за секој возач во Македонија. 
                </p>
                <p className="text-lg mb-4 leading-relaxed">
                    Основани во 2010 година, континуирано инвестираме во најсовремена дијагностичка опрема и обука на нашиот персонал. Во Авто Сервис [Ваше Име], квалитетот е наш приоритет, а задоволството на клиентите е нашата најголема награда.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-accent">
                    Дојдете и уверете се зошто сме најдобриот избор за вашето возило!
                </p>
            </article>
        </section>

    </main>
    
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
