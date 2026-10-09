import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MobileMenuService {
  private readonly open = signal(false);
  readonly isOpen = this.open.asReadonly();

  constructor() {
    effect(() => {
      const isOpen = this.open();
      if (typeof document !== 'undefined') {
        document.body.style.overflow = isOpen ? 'hidden' : '';
      }
    });
  }

  openMenu(): void { this.open.set(true); }
  closeMenu(): void { this.open.set(false); }
  toggle(): void { this.open.update((v) => !v); }
}