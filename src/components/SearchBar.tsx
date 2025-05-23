// src/components/SearchBar.tsx
"use client";

import React, { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (value: string) => void;
}

export default function SearchBar({ placeholder = "", onSearch }: SearchBarProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (trimmed) onSearch(trimmed);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="flex-grow border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition"
      >
        Buscar
      </button>
    </form>
  );
}
