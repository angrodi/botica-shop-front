import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/core/interfaces/producto.interface';
import { PedidoService } from 'src/app/core/services/pedido.service';
import { ProductoService } from 'src/app/core/services/producto.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private pedidoService: PedidoService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.productoService.find()
      .subscribe(response => {
        this.productos = response.data.slice(-8);
      }, err => {
        this.productos = [];
      });
  }

  agregar(producto: Producto): void {
    this.pedidoService.pedido.detalles?.push({
      cantidad: 1,
      productoId: producto.id,
      producto
    });

    this.toastr.success('Producto agregado al carrito');
  }

}
