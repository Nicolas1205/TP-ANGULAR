import { Producto } from "./producto";

export class Cart {
  public productos: Producto[] = [];

  addToCart(producto: Producto): void {
    this.productos.push(producto);
  }
}
