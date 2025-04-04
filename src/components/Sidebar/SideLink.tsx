import React from "react";

interface SideLinkProps {
  children?: React.ReactNode;
  href: string;
}

function SideLink({ children, href }: SideLinkProps) {
  return (
    <a
      href={href}
      className="px-5 py-3 rounded-md text-neutral-200 font-bold text-lg"
    >
      {children}
    </a>
  );
}

export default SideLink;
