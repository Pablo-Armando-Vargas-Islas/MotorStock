import { z } from 'zod'

export const vehiculoFormSchema = z.object({
  placa: z.string().min(1, 'La placa es requerida').max(7, 'La placa no puede tener más de 7 caracteres').regex(/^(?=.*[A-Z])(?=.*\d)[A-Z0-9]+$/, {
    message: "La placa debe contener solo letras mayúsculas y números, sin espacios ni guiones, y debe incluir al menos una letra y un número",
  }),
  marca: z.string().min(1, 'La marca es requerido').max(50, 'La marca no puede tener más de 50 caracteres'),
  tipo: z.string().min(1, 'El modelo es requerido').max(50, 'El modelo no puede tener más de 50 caracteres'),
  modelo: z.coerce.number().min(1900, 'El año es requerido').max(new Date().getFullYear() + 1, 'El año no puede ser mayor al año actual'),
  serie: z.string().min(1, 'La serie es requerida').max(50, 'La serie no puede tener más de 50 caracteres'),
  motor: z.string().min(1, 'El motor es requerido').max(50, 'El motor no puede tener más de 50 caracteres'),
  ubicacion: z.string().min(1, 'La ubicación es requerida').max(255, 'La ubicación no puede tener más de 255 caracteres'),
  proyecto: z.string().min(1, 'El proyecto es requerido').max(100, 'El proyecto no puede tener más de 100 caracteres'),
  versionActual: z.number().optional(),
  versiones: z.array(z.any()),
  seguros: z.array(z.any()),
  gastos: z.array(z.any()),
})