import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface MoreInfoProps {
  children?: React.ReactNode;
}

function MoreInfo({ children }: MoreInfoProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={() => setOpen(!open)}
        className="hover:cursor-pointer hover:bg-gray-400 flex flex-row items-center gap-4 rounded-lg px-3 py-2"
      >
        <div>
          {open ? <FaChevronUp size={15} /> : <FaChevronDown size={15} />}
        </div>
        <p className="font-gidole text-lg">La mia storia</p>
      </button>
      <div
        className={`border-l border-r rounded-sm border-gray-600 w-3/4 ${
          open ? "block" : "hidden"
        } `}
      >
        {children}
      </div>
    </div>
  );
}

export default MoreInfo;
