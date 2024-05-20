import React from 'react'
import ButtonMain from './util/ButtonMain'
import Textfield from './util/Textfield'
import Category from './util/Category'
import Buttonsecondary from './util/Buttonsecondary'

const Addexpensemain = () => {
  return (
    <div className='container px-6 py-10 h-[100dvh] relative flex flex-col justify-between'>
      <div>
        <h1 className='text-base font-semibold text-slate-800 mb-3'>Add Expense</h1>
        <p className='text-slate-700 mb-10 text-sm font-normal'>How do you want to input your expense?</p>
        <form action="POST"  className='flex flex-col gap-y-4 h-full'>
          <div className='flex justify-start gap-x-3'>
            <input type="radio" name="manual_input" id="manual-input" className=''/>
            <label htmlFor="manual-input" className=' text-sm font-normal text-slate-700'>Manual input</label>
          </div>
          <Textfield type={'number'} min={0} max= {1000000} label= {'Merchant Name'} />
          <Textfield type={'date'} label= {'enter date'}/>
          <Textfield label={'Description'} placeholder={'Expense Description'}/>
          <Category />
        </form>
      </div>
          <Buttonsecondary content= {'Save Expense'} />
    </div>
  )
}

export default Addexpensemain