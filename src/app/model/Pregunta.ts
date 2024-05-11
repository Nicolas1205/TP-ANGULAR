import { Opcion } from "./Opcion";

export interface Pregunta {
  titulo?: string,
  descripcion?: string,
  palabra: string,
  opciones: Opcion[];
}
