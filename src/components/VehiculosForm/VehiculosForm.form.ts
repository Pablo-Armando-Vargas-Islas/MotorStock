import { z } from 'zod'

export const vehiculoFormSchema = z.object({
  placa: z.string().min(1, 'La placa es requerida').max(7, 'La placa no puede tener más de 7 caracteres').regex(/^(?=.*[A-Z])(?=.*\d)[A-Z0-9]+$/, {
    message: "La placa debe contener solo letras mayúsculas y números, sin espacios ni guiones, y debe incluir al menos una letra y un número",
  }),
  versionActual: z.number(),
})