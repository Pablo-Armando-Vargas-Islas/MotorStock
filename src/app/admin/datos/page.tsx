// src/app/admin/datos/page.tsx
"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/context/AuthContext";
import SearchBar from "@/components/SearchBar";
import VehiclesTable, { VehicleRaw } from "@/components/VehiclesTable";

export default function DatosGeneralesPage() {
  const { user, status } = useAuth();
  const [vehicles, setVehicles] = useState<VehicleRaw[]>([]);
  const [page, setPage]       = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 30;

  const fetchData = useCallback(
    async (placa?: string, pageNumber = 1) => {
      const params = new URLSearchParams({ 
        page:  String(pageNumber),
        limit: String(limit),
      });
      if (placa) params.append("placa", placa);

      const res  = await fetch(`/api/admin/datos?${params}`);
      const json = await res.json() as { data: VehicleRaw[]; total: number };

      setVehicles(json.data);
      setTotalPages(Math.ceil(json.total / limit));
      setPage(pageNumber);
    },
    [limit]
  );

  // fetch inicial
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // —————————————
  // memoizamos handleSearch para que su referencia no cambie
  const handleSearch = useCallback(
    (placa: string) => {
      // al escribir, siempre arrancamos en la página 1
      fetchData(placa, 1);
    },
    [fetchData]
  );

  // paginación
  const handlePrev = useCallback(() => {
    if (page > 1) fetchData(undefined, page - 1);
  }, [fetchData, page]);

  const handleNext = useCallback(() => {
    if (page < totalPages) fetchData(undefined, page + 1);
  }, [fetchData, page, totalPages]);

  if (status === "loading") return <p>Cargando…</p>;
  if (!user)                return <p>No autorizado</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Datos Generales</h1>

      <SearchBar
        placeholder="Buscar por placa…"
        onSearch={handleSearch}
        debounceTime={300}
      />

      <VehiclesTable
        vehicles={vehicles}
        canViewSeguros  ={user.canViewSeguros}
        canViewGastos   ={user.canViewGastos}
        canViewFacturas ={user.canViewFacturas}
      />

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <span>
          Página {page} de {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
