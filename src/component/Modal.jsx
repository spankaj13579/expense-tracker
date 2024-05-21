import React from 'react';
import Textfield from './util/Textfield';
import ButtonMain from './util/ButtonMain';
import { RxCross2 } from 'react-icons/rx';

const Modal = () => {
  return (
    <div className='bg-slate-600 bg-opacity-60 h-full w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between'>
      <div className='modal-body relative rounded-2xl bg-slate-100 p-5 flex flex-col h-100 justify-between w-11/12 m-auto items-center gap-y-10 '>
        <div className='modal-head'>
        <p className='absolute right-4 top-3 cursor-pointer'>
            <RxCross2 />
          </p>
          <h1 className='text-base font-semibold'>Add New Category</h1>
        </div>
        <div className='w-full modal-body'>
        <Textfield label={'Category Name'} placeholder={'Enter Category Name'} />
        </div>
        <div className='w-full modal-footer'>
        <ButtonMain content={'Save'} />
        </div>
        </div>
    </div>
  );
}

export default Modal;
