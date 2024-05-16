import React from 'react'
import Textfield from './util/Textfield'
import ButtonMain from './util/ButtonMain'
import { BsBell, BsChatDots } from 'react-icons/bs'
import Getstartedexpenseteport from './util/Getstartedexpenseteport'
import Bottomnav from './util/Bottomnav'

const Dashbpard = () => {
  return (
    <div className='container pt-10 h-[100dvh] relative flex flex-col justify-between'>
      <div className=' px-6'>
        <p className='text-[18px] font-medium text-slate-700 mb-6 flex items-center gap-x-3 justify-between'>Good morning, Helen 
        <span className='flex gap-x-5'>
            <BsBell />
            <BsChatDots />
        </span></p>
        <div className='flex gap-x-8 justify-between'>
          <p className='p-4 border-2 border-gray-200 rounded-lg text-base font-medium'>0 
          <span className='text-slate-500 block pt-2 text-sm font-normal'> 
            Expense report created
          </span>
          </p>
          <p className='p-4 border-2 border-gray-200 rounded-lg text-base font-medium'>0 
          <span className='text-slate-500 block pt-2 text-sm font-normal'> 
          Expense report submitted
          </span>
          </p>
        </div>
      </div>
      <div className=' px-6'>
      <Getstartedexpenseteport />
      </div>
      <Bottomnav />
    </div>
  )
}

export default Dashbpard