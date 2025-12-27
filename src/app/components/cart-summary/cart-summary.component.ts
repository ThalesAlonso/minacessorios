import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartItem, ShippingMethod } from '../../models/cart';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.scss'
})
export class CartSummaryComponent {
  readonly items$ = this.cart.items$;
  readonly subtotal$ = this.cart.subtotal$;
  readonly total$ = this.cart.total$;
  readonly shipping$ = this.cart.shipping$;
  readonly totalQuantity$ = this.cart.totalQuantity$;

  cep = '';
  shippingMethod: ShippingMethod = 'economica';

  constructor(private readonly cart: CartService) {}

  trackByItem(_index: number, item: CartItem): string {
    return item.product.name;
  }

  updateQty(item: CartItem, qty: number): void {
    this.cart.updateQuantity(item.product.name, qty);
  }

  remove(item: CartItem): void {
    this.cart.removeItem(item.product.name);
  }

  applyShipping(): void {
    this.cart.setShipping(this.shippingMethod, this.cep);
  }

  checkout(method: 'paypal' | 'credit'): void {
    const message =
      method === 'paypal'
        ? 'Checkout PayPal simulado. Substitua pelo client ID e SDK do PayPal para cobrar de verdade.'
        : 'Checkout de cartao simulado. Conecte seu gateway favorito (PagSeguro, Mercado Pago etc.).';
    alert(message);
  }
}
