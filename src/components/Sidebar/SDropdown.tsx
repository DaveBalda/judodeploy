import React, { useEffect, useRef, useState } from "react";
import "./Sidebar.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface SDropdownProps {
  children?: React.ReactNode;
  name: string;
}

function SDropdown({ children, name }: SDropdownProps) {
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
      className="sb-container flex flex-col gap-5 px-5 py-2 rounded-md text-neutral-200 font-bold text-lg"
      ref={menuRef}
    >
      <div className="sb-trigger" onClick={() => setOpen(!open)}>
        <p>{name}</p>
        {open ? <FaChevronUp size={15} /> : <FaChevronDown size={15} />}
      </div>

      <div className={`sb-menu ${open ? "active" : "inactive"}`}>
        {children}
      </div>
    </div>
  );
}

export default SDropdown;
