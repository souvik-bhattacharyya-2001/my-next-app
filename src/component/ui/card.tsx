// src/components/ui/Card.tsx
import React from "react";

export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-gray-200 shadow-sm bg-white ${className}`}
    >
      {children}
    </div>
  );
}
