import { Accessory } from './accessory';

export type ShippingMethod = 'economica' | 'expressa' | 'retirada';

export interface CartItem {
  product: Accessory;
  quantity: number;
}

export interface ShippingSelection {
  method: ShippingMethod;
  cep?: string;
  cost: number;
  eta: string;
}
