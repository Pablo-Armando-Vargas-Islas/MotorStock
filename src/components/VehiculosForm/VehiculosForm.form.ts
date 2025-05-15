import { z } from 'zod'

export const vehiculoFormSchema = z.object({
  placa: z.string().min(1, 'La placa es requerida'),
  versionActual: z.number(),
})