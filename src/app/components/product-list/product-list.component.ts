import { Component, inject } from '@angular/core'
import { Producto } from '../../model/producto'
import { ProductItemComponent } from '../product-item/product-item.component'
import { CartController } from '../../controller/cart.controller'

@Component({
  selector: 'product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  imports: [ProductItemComponent],
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  public cartController = inject(CartController);

  public productos: Producto[] = [];
  constructor() {
    this.productos =  [
    { nombre: "notebook asus 13l", descripcion: "disco40gb, 15pulgadas", img: "notebook13l.jpg", precio: 45.5 },
    { nombre: "Monitor LG 14", descripcion: "textodescriptivo producto 02", img: "producto02.jpg", precio: 99 },
    { nombre: "Monitor LG 14", descripcion: "textodescriptivo producto 02", img: "producto02.jpg", precio: 99 }]
  }

}

