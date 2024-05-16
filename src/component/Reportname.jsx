import React from 'react'
import Textfield from './util/Textfield'
import ButtonMain from './util/ButtonMain'
import Buttonsecondary from './util/Buttonsecondary'

const Reportname = () => {
  return (
    <div className='container px-6 py-10 h-[100dvh] relative flex flex-col justify-between'>
      <div>
        <h1 className='text-base font-semibold text-slate-800 mb-6'>Create Expense Report</h1>
        <Textfield label={'Report Name'} placeholder= {'Enter report name'}/>
      </div>
      <div>
        <div className='mb-9'>
          <Buttonsecondary  content={'Add Expense'} />
        </div>
        <ButtonMain content= {'Submit Expense Report'}/>
      </div>
    </div>
  )
}

export default Reportname