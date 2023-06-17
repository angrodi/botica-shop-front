import { Cliente } from "./cliente.interface";
import { Usuario } from "./usuario.interface";
import { DetallePedido } from "./detalle-pedido.interface";

export interface Pedido {
  id?: number;
  direccion?: string;
  monto?: number;
  fechaCreacion?: string;
  fechaEntrega?: string;
  metodoPago?: string;
  estado?: string;
  detalles?: DetallePedido[];
  clienteId?: number;
  empleadoId?: number;
  cliente?: Cliente;
  empleado?: Usuario;
}