import { Component } from '@angular/core'
import { CartListComponent } from '../cart/cart-list.component';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CartListComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  showDialog: boolean = false;
}

