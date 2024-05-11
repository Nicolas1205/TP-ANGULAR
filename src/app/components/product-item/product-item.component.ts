import { Component, Input, inject } from '@angular/core'
import { Producto } from '../../model/producto';
import { Cart } from '../../model/cart';
import { CartController } from '../../controller/cart.controller';


@Component({
  selector: 'product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() producto!: Producto;

  public cartController: CartController = inject(CartController);

  addProductToCart(producto?: Producto) {
    this.cartController.addToCart({nombre: "dsa", descripcion: "dsuads", img: "dsa", precio: 100});
  }
}

