import React from "react";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";

const Bottomnav = () => {
  return (
    <div className="flex justify-between gap-x-3 bg-white py-6 px-6">
      <div className="flex flex-col items-center gap-2 text-red-600">
        <BsFillHouseDoorFill />
        <p className="text-sm">Dashboard</p>
      </div>
      <div className="flex flex-col items-center gap-2 text-red-600">
      <IoMdSettings />
        <p className="text-sm">settings</p>
      </div>
    </div>
  );
};

export default Bottomnav;
