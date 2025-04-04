import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface SidebarHeaderProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function SidebarHeader({ open, setOpen }: SidebarHeaderProps) {
  return (
    <header className="w-full py-5 px-5 relative z-40 bg-emerald-700 flex flex-row items-center">
      <a href="#">
        <img
          src="/images/navbar.png"
          alt="Navigation Bar Image"
          width="100px"
          className="rounded-md"
        />
      </a>
      <button
        className="ml-auto px-2 py-2 rounded-md"
        onClick={() => setOpen(!open)}
      >
        <GiHamburgerMenu size={40} />
      </button>
    </header>
  );
}

export default SidebarHeader;
