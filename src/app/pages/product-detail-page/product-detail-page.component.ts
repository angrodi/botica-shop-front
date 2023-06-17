import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/core/interfaces/producto.interface';
import { ProductoService } from 'src/app/core/services/producto.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {
  id: string | null = '';
  producto: Producto = {};

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('productoId');

    this.productoService.findById(Number(this.id))
      .subscribe(response => {
        this.producto = response.data;
      })
  }

}
