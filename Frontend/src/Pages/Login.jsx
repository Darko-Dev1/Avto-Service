import React from 'react'
import CustomInput from '../components/CustomInput'
import { Button } from '../components/ui/button'
import MoreOpt from '../components/MoreOpt'

const Login = () => {
  return (
    <form className='w-[30%] p-6 flex flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border rounded-2xl'>
        <div className="flex justify-center h-[15vh]">  
            <img id="imgLogo" className="w-[144px]  " src="https://cdn.freebiesupply.com/logos/large/2x/autoservice-logo-png-transparent.png" alt="" />  
        </div>
        <CustomInput placeholder="Enter User Name" label="Username"></CustomInput>
        <CustomInput placeholder="Enter Email" label="Email"></CustomInput>
        <CustomInput placeholder="Enter Password" label="Password"></CustomInput>
        <Button>Log In</Button>
        <MoreOpt option="Sign Up"></MoreOpt>
    </form>

  )
}

export default Login
