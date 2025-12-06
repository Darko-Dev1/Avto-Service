import React from 'react'
import { AppSidebar } from "../components/app-sidebar.jsx"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb.jsx"
import { Separator } from "../components/ui/separator.jsx"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../components/ui/sidebar.jsx"


import '../App.css'
import CustomInput from '../components/CustomInput'
import { Button } from '../components/ui/button'
import MoreOpt from '../components/MoreOpt'

const Signup = () => {
  return (
       <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-18 shrink-0 items-center gap-2 z-50  border-b px-4 sticky top-0">
           <img id="imgLogo" className="w-[144px] absolute left-[50%] -translate-x-[50%] -translate-y-1.5" src="logo.jpg" alt="" />  
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  <a  href="/">Дома</a>
                </BreadcrumbLink>
              </BreadcrumbItem>


            </BreadcrumbList>
          </Breadcrumb>
        </header>
            <form className='xl:w-[25%] sm:w-[65%] w-[100%]  p-6 flex flex-col  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border rounded-2xl'>
              <div className="flex justify-center h-[20vh] flex-col items-center">  
                  <img id="imgLogo" className="w-[144px]  " src="https://cdn.freebiesupply.com/logos/large/2x/autoservice-logo-png-transparent.png" alt="" />  
                  <h1 className='text-2xl font-extrabold font-extrabold text-white mb-8 -mt-9.5 border-accent pb-2 text-center'>Регистрирај </h1>
              </div>

              <CustomInput placeholder="Внесете Име" label="Име"></CustomInput>
              <CustomInput placeholder="Внесете Email" type="email"  label="Email"></CustomInput>
              <CustomInput placeholder="Внесете Лозинка" type="password" label="Лозинка"></CustomInput>
              <div className='relative p-8'>
                <Button className="w-[20%] absolute left-[50%] translate-x-[-50%] bg-accent text-white">Регистрирај</Button>
              </div>
              <MoreOpt option="Најави се!"></MoreOpt>
            </form>

      </SidebarInset>
    </SidebarProvider>
  )
}

export default Signup
