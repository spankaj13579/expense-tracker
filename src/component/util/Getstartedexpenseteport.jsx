import React from 'react'
import ButtonMain from './ButtonMain'

const Getstartedexpenseteport = () => {
  return (
    <div className='w-full text-center'>
    <p className='text-base font-medium text-slate-700 mb-4 '>No expense report found!</p>
    <p className='text-base font-normal text-slate-400 mb-[60px] '>Create an expense report to get started</p>
    <ButtonMain content={'Create Expense Report'} />
    </div>
  )
}

export default Getstartedexpenseteport