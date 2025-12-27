import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';
import { Accessory } from '../../models/accessory';

@Component({
  standalone: true,
  selector: 'app-accessory-carousel',
  imports: [CommonModule],
  templateUrl: './accessory-carousel.component.html',
  styleUrl: './accessory-carousel.component.scss'
})
export class AccessoryCarouselComponent implements OnInit, OnDestroy {
  @Input() items: Accessory[] = [];
  @Input() title = 'Coleção em destaque';
  @Input() subtitle?: string;
  @Input() accent = '#f35b92';
  @Input() autoPlay = true;
  @Input() intervalMs = 5400;

  activeIndex = 0;
  private readonly destroy$ = new Subject<void>();

  ngOnInit(): void {
    if (this.autoPlay && this.items.length > 1) {
      interval(this.intervalMs)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.next());
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.items.length;
  }

  previous(): void {
    this.activeIndex = (this.activeIndex - 1 + this.items.length) % this.items.length;
  }

  goTo(index: number): void {
    this.activeIndex = index;
  }

  trackByName(_index: number, item: Accessory): string {
    return item.name;
  }

  get activeItem(): Accessory | undefined {
    return this.items[this.activeIndex];
  }
}
