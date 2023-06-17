import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/core/services/pedido.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  constructor(
    public pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
  }

}
