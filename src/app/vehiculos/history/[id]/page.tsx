// "use client"

// import React, { useEffect, useState } from 'react'
// import { DataTable } from './HistoryTable/data-table'
// import { VersionVehiculo } from '@/generated/prisma'
// import axios from 'axios'
// import { columns } from './HistoryTable/columns'

// async function getData(): Promise<VersionVehiculo[]> {
//   const baseURL = process.env.NEXT_BASE_URL || 'http://localhost:3000'

//   try {
//     const resultado = await axios.get(`${baseURL}/api/vehiculos/history/${id}`)
//     return resultado.data
//   } catch {
//     return []
//   }
// }

// const HistoryPage = () => {
//   const [data, setData] = useState<VersionVehiculo[]>([])
  
//   useEffect(() => {
//     getData().then(setData)
//   }, [])
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-5 dark:bg-neutral-800">
//       <div className="flex justify-between items-center w-full max-w-4xl mx-auto px-4">
//         <h1 className="text-3xl font-bold">Historial del vehiculo</h1>
//       </div>
//         <DataTable columns={columns} data={data}/>
//     </div>
//   )
// }

// export default HistoryPage

'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { DataTable } from './HistoryTable/data-table'
import { VersionVehiculo } from '@/generated/prisma'
import axios from 'axios'
import { columns } from './HistoryTable/columns'

const HistoryPage = () => {
  const [data, setData] = useState<VersionVehiculo[]>([])
  const params = useParams()
  const id = params?.id as string

  useEffect(() => {
    const getData = async () => {
      const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

      try {
        const resultado = await axios.get(`${baseURL}/api/vehiculos/history/${id}`)
        setData(resultado.data)
      } catch (error) {
        console.error('Error al obtener historial:', error)
        setData([])
      }
    }

    if (id) getData()
  }, [id])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-5 dark:bg-neutral-800">
      <div className="flex justify-between items-center w-full max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold">Historial del vehículo</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default HistoryPage
