import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, CartSummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly brandName = 'Mina Acessorios';
}
