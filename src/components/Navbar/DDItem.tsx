import React from "react";

interface DDItemProps {
  children?: React.ReactNode;
  name: string;
  href: string;
}

function DDItem({ children, name, href }: DDItemProps) {
  return (
    <a href={href}>
      <div className="flex flex-row gap-3 px-2 py-2 hover:bg-emerald-600 items-center rounded-xl">
        <span className="px-2 py-2 bg-emerald-800 rounded-xl">{children}</span>
        <p>{name}</p>
      </div>
    </a>
  );
}

export default DDItem;
