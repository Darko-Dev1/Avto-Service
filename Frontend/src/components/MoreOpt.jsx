import React from 'react'

const MoreOpt = (options) => {
  return (
    <div>
        <div className='flex p-6 items-center'>
            <div className='bg-border w-[45%] h-[0.2vh] mr-auto'></div>
            <p>or</p>
            <div className='bg-border w-[45%] h-[0.2vh] ml-auto'></div>
        </div>
        <div className='flex justify-center'>
            <a className='text-blue-700 underline text-center' href="">{options.option}</a>
        </div>
    </div>
  )
}

export default MoreOpt
