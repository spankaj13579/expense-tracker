import React, { useEffect, useState } from 'react';

const Textfield = ({ type = 'text', label, ipname, placeholder, onTyping, min, max }) => {
  const [todaysDate, settodaysDate] = useState('');

  // on typing in field
  const handleInput= (e)=>{
    onTyping(e)
  }
  const  dateChange= (e)=>{
    settodaysDate(e.target.value)
    onTyping(e);
  }

  let currentDate= ()=>{
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const currentDate = `${year}-${month}-${day}`;
    settodaysDate(currentDate);
    }
    
  useEffect(() => {
    currentDate();
  }, []);

  return (
    <div>
      <label htmlFor={label} className="block mb-2 font-normal text-sm text-slate-700">
        {label}
      </label>
      {type === 'number' ? (
        <input
          onChange={handleInput}
          type="number"
          name={ipname}
          placeholder={placeholder || label}
          min={min || 0}
          max={max || 10000000}
          pattern="[0-9]*"
          className="text-slate-800 text-base border-solid border-2 rounded-lg p-3 block w-full font-normal bg-transparent outline-red-400"
        />
      ) : type === 'date' ? (
        <input
          type="date"
          value={todaysDate}
          name= 'date'
          onChange={dateChange}
          className="text-slate-800 text-base border-solid border-2 rounded-lg p-3 block w-full font-normal bg-transparent"
        />
      ) : (
        <input
        onChange={handleInput}
          type="text"
          name={ipname}
          placeholder={placeholder || label}
          className="text-slate-800 text-base border-solid border-2 rounded-lg p-3 block w-full font-normal bg-transparent"
        />
      )}
    </div>
  );
};

export default Textfield;
