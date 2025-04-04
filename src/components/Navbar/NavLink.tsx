import React from "react";

interface NavLinkProps {
  children?: React.ReactNode;
  href: string;
}

function NavLink({ children, href }: NavLinkProps) {
  return (
    <a
      href={href}
      className="bg-inherit hover:bg-emerald-600 px-5 py-2 rounded-md text-neutral-200 font-bold text-lg"
    >
      {children}
    </a>
  );
}

export default NavLink;
