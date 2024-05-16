import React from 'react'
import { useNavigate } from 'react-router-dom';

const ButtonMain = ({content,path}) => {
  const navigate = useNavigate();

  function handleClick() {
    console.log(path);
    navigate(path);
  }
  return (
    <button className='bg-red-400 border-2 border-red-400 p-3.5 rounded-lg w-full text-stone-100 font-semibold'
    onClick={handleClick}>{content}</button>
  )
}

export default ButtonMain