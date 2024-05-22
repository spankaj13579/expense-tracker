import React, {useEffect, useState } from 'react'
import Textfield from './util/Textfield'
import Category from './util/Category'
import Buttonsecondary from './util/Buttonsecondary'
import Modal_one from './Modal'
import { useActionData } from 'react-router-dom'

const Addexpensemain = () => {

  const [saveExpense, setsaveExpense]=useState({});
  // finction to set expense by drilling it down to the component
  let setExpense= (e)=>{
    setsaveExpense((prev)=> ({...prev,[e.target.name]: e.target.value}))
    console.log(saveExpense)
  };

  return (
    <div className='relative'>
      <form className='container px-6 py-10 h-[100dvh] relative flex flex-col justify-between gap-y-7'>
        <div>
          <h1 className='text-base font-semibold text-slate-800 mb-3'>Add Expense</h1>
          <p className='text-slate-700 mb-10 text-sm font-normal'>How do you want to inpusetExpenset your expense?</p>
          <div className='flex flex-col gap-y-4 h-full'>
            <div className='flex justify-start gap-x-3'>
              <input type="radio" name="manual_input" id="manual-input" className=''/>
              <label htmlFor="manual-input" className=' text-sm font-normal text-slate-700'>Manual input</label>
            </div>
            <Textfield onTyping= {setExpense} ipname={'merchant'} type={'number'} min={0} max= {1000000} label= {'Merchant Name'} />
            <Textfield onTyping= {setExpense} type={'date'} label= {'enter date'}/>
            <Textfield onTyping= {setExpense} label={'Description'} ipname={'exp_description'} placeholder={'Expense Description'}/>
            <Category />
          </div>
        </div>
            <Buttonsecondary content= {'Save Expense'} />
      </form>
      {/* <Modal_one /> */}
    </div>
  )
}

export default Addexpensemain