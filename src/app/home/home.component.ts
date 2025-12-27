import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccessoryCarouselComponent } from '../components/accessory-carousel/accessory-carousel.component';
import { Accessory, FeatureHighlight } from '../models/accessory';
import {
  COLLECTIONS,
  FEATURE_HIGHLIGHTS,
  HERO_ACCESSORIES,
  NEW_ARRIVALS
} from '../data/accessories.data';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AccessoryCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly heroAccessories: Accessory[] = HERO_ACCESSORIES;
  readonly newArrivals: Accessory[] = NEW_ARRIVALS;
  readonly highlights: FeatureHighlight[] = FEATURE_HIGHLIGHTS;
  readonly collections = COLLECTIONS;

  selectedAccessory?: Accessory;

  constructor(private readonly cart: CartService) {}

  openAccessory(accessory: Accessory): void {
    this.selectedAccessory = accessory;
  }

  closeAccessory(): void {
    this.selectedAccessory = undefined;
  }

  addToCart(accessory: Accessory): void {
    this.cart.addItem(accessory);
  }
}
