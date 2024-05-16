import React from "react";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Bottomnav = () => {
  return (
    <div className="flex relative justify-between gap-x-3 bg-white py-6 px-6">
      <div className="flex flex-col items-center gap-2 text-red-600">
        <BsFillHouseDoorFill />
        <p className="text-sm">Dashboard</p>
      </div>
      <button className="bg-red-600 absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white p-6 rounded-full border-[12px] border-slate-100">
        <FaPlus />
      </button>
      <div className="flex flex-col items-center gap-2 text-red-600">
        <IoMdSettings />
        <p className="text-sm">settings</p>
      </div>
    </div>
  );
};

export default Bottomnav;
