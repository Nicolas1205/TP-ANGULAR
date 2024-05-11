import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core'
import { CartController } from '../../controller/cart.controller';

@Component({
  selector: 'cart-list',
  standalone: true,
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss'
})
export class CartListComponent implements OnInit {
  public cartService = inject(CartController);
  @Input() closable = true;
  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor () {}

  ngOnInit(): void {

  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}

