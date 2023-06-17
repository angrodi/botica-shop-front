import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DetallePedido } from '../interfaces/detalle-pedido.interface';
import { Pedido } from '../interfaces/pedido.interface';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  apiURL = environment.apiURL + '/api/pedidos/';
  
  pedido: Pedido = {
    direccion: '',
    monto: 0,
    metodoPago: 'efectivo',
    estado: 'pendiente',
    detalles: []
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public find(): Observable<any> {
    return this.httpClient.get<any>(this.apiURL);
  }

  public findById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.apiURL + id);
  }

  public create(pedido: Pedido): Observable<any> {
    return this.httpClient.post<any>(this.apiURL, pedido);
  }

  public update(id: number, pedido: Pedido): Observable<any> {
    return this.httpClient.put<any>(this.apiURL + id, pedido);
  }

  public patch(id: number, pedido: Pedido): Observable<any> {
    return this.httpClient.patch<any>(this.apiURL + id, pedido);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.apiURL + id);
  }

  public calcularCantidadCarrito(): number {
    let cantidad = 0;
    this.pedido.detalles?.forEach( (detalle: DetallePedido) => {
      if (detalle.cantidad) {
        cantidad += detalle.cantidad;
      }
    });
    return cantidad;
  }

  public calcularMontoCarrito(): number {
    let monto = 0;
    this.pedido.detalles?.forEach( (detalle: DetallePedido) => {
      if (detalle.cantidad && detalle.producto?.precio) {
        monto += detalle.cantidad * detalle.producto.precio;
      }
    });
    return monto;
  }
}
