import { Component, inject } from '@angular/core'
import { CartListComponent } from '../cart/cart-list.component';
import { CartController } from '../../controller/cart.controller';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CartListComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public cartService = inject(CartController);
}

