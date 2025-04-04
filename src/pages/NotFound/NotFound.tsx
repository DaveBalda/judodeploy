import React from "react";

interface NotFoundProps {
  children?: React.ReactNode;
}

function NotFound({ children }: NotFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-16 mt-40">
      <h1 className="text-7xl font-bold">404 - Pagina inesistente!</h1>
      <p className="text-center text-4xl">{children}</p>
      <a
        href="/"
        className="px-5 py-3 bg-red-500 hover:bg-red-600 rounded-lg text-white text-2xl"
      >
        Torna alla home
      </a>
    </div>
  );
}

export default NotFound;
