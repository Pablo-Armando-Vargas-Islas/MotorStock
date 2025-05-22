"use client"

import { VersionVehiculo } from "@/generated/prisma"
// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
// import { MoreHorizontal } from "lucide-react"
// import Link from "next/link"



export const columns: ColumnDef<VersionVehiculo>[] = [
  {
    accessorKey: "id",
    header: "Id"
  },
  {
    accessorKey: "vehiculoId",
    header: "Vehiculo Id"
  },
  {
    accessorKey: "placa",
    header: "Placa"
  },
  {
    accessorKey: "marca",
    header: "Marca"
  },
  {
    accessorKey: "tipo",
    header: "Tipo"
  },
  {
    accessorKey: "serie",
    header: "Serie"
  },
  {
    accessorKey: "motor",
    header: "Motor"
  },
  {
    accessorKey: "ubicacion",
    header: "Ubicación"
  },
  {
    accessorKey: "proyecto",
    header: "Proyecto"
  },
  {
    accessorKey: "version",
    header: "Version"
  },
  // {
  //   id: "actions",
  //   enableHiding: false,
  //   cell: ({ row }) => {
  //     const vehiculo = row.original
 
  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(vehiculo.id.toString())}
  //           >
  //             Copiar Id
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>
  //             <Link href={`/vehiculos/${vehiculo.id}`}>
  //               Editar vehiculo
  //             </Link>
  //           </DropdownMenuItem>
  //           <DropdownMenuItem>
  //             <Link href={`/vehiculos/history/${vehiculo.id}`}>
  //               Ver historial
  //             </Link>
  //           </DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     )
  //   },
  // }
]