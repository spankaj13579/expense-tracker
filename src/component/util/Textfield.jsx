import React from 'react'

const Textfield = () => {
  return (
    <div className=''>
        <label htmlFor="EmployeeId" className='block mb-2 font-normal text-sm text-slate-700'>Employee ID</label>
        <input type="text" placeholder='Enter your employee ID' className='text-slate-700 text-base border-solid border-2 rounded-lg p-3 block w-full font-normal' />
    </div>
  )
}

export default Textfield