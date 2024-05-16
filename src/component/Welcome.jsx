import React, { useEffect, useState } from 'react'
import Login from './Login';

const Welcome = () => {
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setWaiting(true);
    }, 4000);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <>
    {waiting ? <Login /> : <div className='w-screen h-screen flex items-center justify-center'>
      <p className='text-red-400 text-3xl font-bold'>Expense tracker</p>
    </div>
    }
    </>
    
  )
}

export default Welcome