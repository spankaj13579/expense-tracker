import React from 'react'
import Textfield from './util/Textfield'
import ButtonMain from './util/ButtonMain'

const Login = () => {
  return (
    <div className='container px-6 py-10 h-[100dvh] relative flex flex-col justify-between'>
      <div>
        <h1 className='text-3xl font-semibold text-slate-800 mb-3'>Welcome,</h1>
        <p className='text-slate-700 mb-10 text-base font-normal'>Login with your employee ID</p>
        <Textfield />
      </div>
      <ButtonMain />
    </div>
  )
}

export default Login