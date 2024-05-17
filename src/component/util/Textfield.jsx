import React from 'react'

const Textfield = ({type= 'text', label, placeholder, min, max}) => {
  return (
    <div className=''>
        <label htmlFor="EmployeeId" className='block mb-2 font-normal text-sm text-slate-700'>{label}</label>
        {type === 'number' ? (
          <input type='number' placeholder={placeholder || label} min={min || 0} max={max || 10000000} pattern='[0-9]*' className='text-slate-800 text-base border-solid border-2 rounded-lg p-3 block w-full font-normal bg-transparent outline-red-400' />
        ) : type== 'date' ? (
          <input type= 'date' placeholder='DD-MM-YYYY' className='text-slate-800 text-base border-solid border-2 rounded-lg p-3 block w-full font-normal bg-transparent' />
        ):(
          <input type= 'text' placeholder={placeholder || label} className='text-slate-800 text-base border-solid border-2 rounded-lg p-3 block w-full font-normal bg-transparent' />
        )}
    </div>
  )
}

export default Textfield