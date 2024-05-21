import React from 'react'
import { useNavigate } from 'react-router-dom';

const Buttonsecondary = ({content, path}) => {
  const navigate = useNavigate();

  function handleClick() {
    console.log(path);
    navigate(path);
  }

  return (
    <button className='border-2 border-red-400 text-red-400 p-3.5 rounded-lg w-full font-semibold' onClick={handleClick}>{content || 'button'}</button>
  )
}

export default Buttonsecondary