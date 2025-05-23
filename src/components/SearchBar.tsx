// src/components/SearchBar.tsx
"use client";

import React, { useState, useEffect } from "react";

interface SearchBarProps {
  placeholder?: string;
  /** Se llamará con el valor actual tras el debounce */
  onSearch: (value: string) => void;
  /** Tiempo de debounce en ms */
  debounceTime?: number;
}

export default function SearchBar({
  placeholder = "",
  onSearch,
  debounceTime = 300,
}: SearchBarProps) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(value.trim());
    }, debounceTime);

    return () => {
      clearTimeout(handler);
    };
  }, [value, onSearch, debounceTime]);

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="flex-grow border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {/* opcional: podrías dejar el botón para búsquedas manuales */}
    </div>
  );
}
