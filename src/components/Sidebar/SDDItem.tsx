import React from "react";

interface SDDItemProps {
  children?: React.ReactNode;
  name: string;
  href: string;
}

function SDDItem({ children, name, href }: SDDItemProps) {
  return (
    <div className="flex flex-row gap-2 px-1 py-3 items-center rounded-xl">
      <span className="px-2 py-2 bg-emerald-800 rounded-xl">{children}</span>
      <a href={href}>{name}</a>
    </div>
  );
}

export default SDDItem;
