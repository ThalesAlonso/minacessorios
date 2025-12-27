import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { Accessory } from '../models/accessory';
import { CartItem, ShippingMethod, ShippingSelection } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly itemsSubject = new BehaviorSubject<CartItem[]>([]);
  readonly items$ = this.itemsSubject.asObservable();

  private readonly shippingSubject = new BehaviorSubject<ShippingSelection>({
    method: 'economica',
    cost: 0,
    eta: '--'
  });
  readonly shipping$ = this.shippingSubject.asObservable();

  readonly subtotal$ = this.items$.pipe(
    map((items) => items.reduce((total, item) => total + item.product.price * item.quantity, 0))
  );

  readonly total$ = combineLatest([this.subtotal$, this.shipping$]).pipe(
    map(([subtotal, shipping]) => subtotal + shipping.cost)
  );

  readonly totalQuantity$ = this.items$.pipe(
    map((items) => items.reduce((total, item) => total + item.quantity, 0))
  );

  addItem(product: Accessory, quantity = 1): void {
    const items = [...this.itemsSubject.value];
    const index = items.findIndex((item) => item.product.name === product.name);
    if (index >= 0) {
      items[index] = { ...items[index], quantity: items[index].quantity + quantity };
    } else {
      items.push({ product, quantity });
    }
    this.itemsSubject.next(items);
  }

  updateQuantity(productName: string, quantity: number): void {
    if (quantity < 1) {
      this.removeItem(productName);
      return;
    }
    const items = this.itemsSubject.value.map((item) =>
      item.product.name === productName ? { ...item, quantity } : item
    );
    this.itemsSubject.next(items);
  }

  removeItem(productName: string): void {
    const items = this.itemsSubject.value.filter((item) => item.product.name !== productName);
    this.itemsSubject.next(items);
  }

  clear(): void {
    this.itemsSubject.next([]);
    this.clearShipping();
  }

  setShipping(method: ShippingMethod, cep?: string): void {
    const base = method === 'expressa' ? 32.9 : method === 'economica' ? 18.9 : 0;
    const cepFactor = cep ? (parseInt(cep.slice(-2), 10) || 0) / 120 : 0;
    const cost = Math.round((base + cepFactor) * 100) / 100;
    const eta =
      method === 'expressa' ? '1-2 dias úteis' : method === 'economica' ? '3-6 dias úteis' : 'Retirada imediata';
    this.shippingSubject.next({ method, cep, cost, eta });
  }

  clearShipping(): void {
    this.shippingSubject.next({
      method: 'economica',
      cost: 0,
      eta: '--'
    });
  }
}
