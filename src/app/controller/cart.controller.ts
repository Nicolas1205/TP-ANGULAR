import { Injectable } from "@angular/core";
import { Cart } from "../model/cart";
import { Producto } from "../model/producto";

@Injectable({
  providedIn: 'root'
})
export class CartController {

  public cart: Cart = new Cart();

  addToCart(producto: Producto): void {
    this.cart.productos.push(producto);
  }

  getProductos(): Producto[] {
    return this.cart.productos;
  }
}
