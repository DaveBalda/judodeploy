import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface DropdownProps {
  children?: React.ReactNode;
  name: string;
}

function Dropdown({ children, name }: DropdownProps) {
  // Hooks
  const [open, setOpen] = useState(false);
  let menuRef = useRef<HTMLDivElement>(null);

  /**
   * Close dropdown menu when the user
   * clicks outside.
   */
  useEffect(() => {
    let handler = (e: any) => {
      if (menuRef.current !== null && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
  });

  return (
    <div
      className="dd-container bg-inherit hover:bg-emerald-600 px-5 py-2 rounded-md text-neutral-200 font-bold text-lg relative"
      ref={menuRef}
    >
      <div className="dd-trigger" onClick={() => setOpen(!open)}>
        <p>{name}</p>
        {open ? <FaChevronUp size={15} /> : <FaChevronDown size={15} />}
      </div>

      <div className={`dd-menu ${open ? "active" : "inactive"}`}>
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
