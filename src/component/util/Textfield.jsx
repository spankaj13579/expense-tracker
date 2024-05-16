import React from 'react'

const Textfield = ({label, placeholder}) => {
  return (
    <div className=''>
        <label htmlFor="EmployeeId" className='block mb-2 font-normal text-sm text-slate-700'>{label}</label>
        <input type="text" placeholder= {placeholder} className='text-slate-700 text-base border-solid border-2 rounded-lg p-3 block w-full font-normal bg-transparent' />
    </div>
  )
}

export default Textfield