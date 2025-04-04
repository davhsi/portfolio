import React from "react";

export function Card({ children }) {
  return (
    <div className="bg-white border rounded-2xl shadow hover:shadow-lg transition duration-300 p-4">
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-2 ${className}`}>{children}</div>;
}
