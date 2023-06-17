import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/core/interfaces/producto.interface';
import { ProductoService } from 'src/app/core/services/producto.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.productoService.find()
      .subscribe(response => {
        this.productos = response.data;
        this.productos = this.productos.filter(producto => producto.estado !== 0);
      });
  }

}
