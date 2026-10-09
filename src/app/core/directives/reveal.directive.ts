import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({ selector: '[reveal]', standalone: true })
export class RevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;
  private observer: IntersectionObserver | null = null;
  private fallback: ReturnType<typeof setTimeout> | null = null;

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2
  ) {}

  ngOnInit(): void {
    const node = this.el.nativeElement;
    if (this.revealDelay > 0) {
      this.renderer.setStyle(node, 'transition-delay', `${this.revealDelay}ms`);
    }
    if (typeof IntersectionObserver === 'undefined' || this.prefersReducedMotion()) {
      node.classList.add('is-visible');
      return;
    }

    // Safety net: never leave content hidden if the observer never fires
    // for an element that is actually inside the viewport.
    this.fallback = setTimeout(() => {
      const rect = node.getBoundingClientRect();
      const inViewport = rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom > 0;
      if (inViewport) node.classList.add('is-visible');
    }, 1200);

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('is-visible');
            this.revealDone();
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    );
    this.observer.observe(node);
  }

  private revealDone(): void {
    if (this.fallback) clearTimeout(this.fallback);
    this.fallback = null;
    this.observer?.disconnect();
  }

  ngOnDestroy(): void {
    if (this.fallback) clearTimeout(this.fallback);
    this.observer?.disconnect();
  }

  private prefersReducedMotion(): boolean {
    return typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}