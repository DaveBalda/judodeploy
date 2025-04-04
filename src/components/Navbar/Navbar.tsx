import React from "react";

interface NavbarProps {
  children?: React.ReactNode;
}

function Navbar({ children }: NavbarProps) {
  return (
    <header className="w-full py-5 px-5 bg-emerald-700 shadow-lg shadow-gray-400 flex flex-row items-center">
      <a href="/">
        <img
          src="/images/navbar.png"
          alt="Navigation Bar Image"
          width="100px"
          className="rounded-md"
        />
      </a>
      <nav className="flex flex-row items-center justify-center gap-52 w-full">
        {children}
      </nav>
    </header>
  );
}

export default Navbar;
