import { NgZone, AfterViewInit, OnDestroy, Component, ElementRef, inject, viewChild } from '@angular/core';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  accent: boolean;
}

@Component({
  selector: 'app-hero-canvas',
  standalone: true,
  template: `<canvas #canvas class="hero-canvas" aria-hidden="true"></canvas>`,
  styleUrl: './hero-canvas.component.scss'
})
export class HeroCanvasComponent implements AfterViewInit, OnDestroy {
  private readonly zone = inject(NgZone);
  private readonly canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

  private ctx: CanvasRenderingContext2D | null = null;
  private nodes: Node[] = [];
  private frame = 0;
  private resizeObserver?: ResizeObserver;
  private intersectionObserver?: IntersectionObserver;
  private visible = true;
  private width = 0;
  private height = 0;
  private colors = {
    node: 'rgba(244, 241, 234, 0.55)',
    edge: 'rgba(244, 241, 234, 0.13)',
    accent: '#e8490f',
    grid: 'rgba(244, 241, 234, 0.045)'
  };

  ngAfterViewInit(): void {
    const canvas = this.canvasRef().nativeElement;
    this.ctx = canvas.getContext('2d');
    if (!this.ctx) return;

    this.readColors();
    this.resize();

    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => this.resize());
      this.resizeObserver.observe(canvas.parentElement ?? canvas);
    }

    if (typeof IntersectionObserver !== 'undefined') {
      this.intersectionObserver = new IntersectionObserver((entries) => {
        this.visible = entries.some((e) => e.isIntersecting);
      });
      this.intersectionObserver.observe(canvas);
    }

    if (!this.prefersReducedMotion()) {
      this.zone.runOutsideAngular(() => this.start());
    }
  }

  ngOnDestroy(): void {
    if (this.frame) cancelAnimationFrame(this.frame);
    this.resizeObserver?.disconnect();
    this.intersectionObserver?.disconnect();
  }

  private prefersReducedMotion(): boolean {
    return typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private start(): void {
    if (this.frame || this.prefersReducedMotion()) return;
    const loop = () => {
      this.frame = requestAnimationFrame(loop);
      if (!this.visible) return;
      this.step();
      this.render();
    };
    this.frame = requestAnimationFrame(loop);
  }

  private readColors(): void {
    if (typeof getComputedStyle !== 'function') return;
    const styles = getComputedStyle(document.body);
    const accent = styles.getPropertyValue('--accent').trim();
    const paper = styles.getPropertyValue('--paper-on-dark').trim();
    if (accent) this.colors.accent = accent;
    if (paper) {
      this.colors.node = hexToRgba(paper, 0.55);
      this.colors.edge = hexToRgba(paper, 0.13);
      this.colors.grid = hexToRgba(paper, 0.045);
    }
  }

  private resize(): void {
    const canvas = this.canvasRef().nativeElement;
    const parent = canvas.parentElement;
    this.width = parent?.clientWidth || canvas.clientWidth || 600;
    this.height = parent?.clientHeight || canvas.clientHeight || 400;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(this.width * dpr));
    canvas.height = Math.max(1, Math.floor(this.height * dpr));
    this.ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.seed();
    this.render();
  }

  private seed(): void {
    const target = Math.round(Math.min(64, (this.width * this.height) / 16000));
    this.nodes = Array.from({ length: Math.max(16, target) }, (_, i) => ({
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      accent: i % 7 === 0
    }));
  }

  private step(): void {
    for (const n of this.nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < -20) n.x = this.width + 20;
      if (n.x > this.width + 20) n.x = -20;
      if (n.y < -20) n.y = this.height + 20;
      if (n.y > this.height + 20) n.y = -20;
    }
  }

  private render(): void {
    const ctx = this.ctx;
    if (!ctx) return;
    ctx.clearRect(0, 0, this.width, this.height);

    // grid
    ctx.strokeStyle = this.colors.grid;
    ctx.lineWidth = 1;
    const gap = 48;
    ctx.beginPath();
    for (let x = gap; x < this.width; x += gap) {
      ctx.moveTo(Math.round(x) + 0.5, 0);
      ctx.lineTo(Math.round(x) + 0.5, this.height);
    }
    for (let y = gap; y < this.height; y += gap) {
      ctx.moveTo(0, Math.round(y) + 0.5);
      ctx.lineTo(this.width, Math.round(y) + 0.5);
    }
    ctx.stroke();

    // edges
    const maxDist = Math.min(160, Math.max(90, this.width / 7));
    ctx.lineWidth = 1;
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const a = this.nodes[i];
        const b = this.nodes[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist > maxDist) continue;
        const alpha = (1 - dist / maxDist) * 0.5;
        ctx.strokeStyle = a.accent || b.accent ? withAlpha(this.colors.accent, alpha * 0.85) : this.colors.edge;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    // nodes
    for (const n of this.nodes) {
      ctx.fillStyle = n.accent ? this.colors.accent : this.colors.node;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.accent ? 2.6 : 1.6, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function hexToRgba(hex: string, alpha: number): string {
  const value = hex.replace('#', '');
  const full = value.length === 3 ? value.split('').map((c) => c + c).join('') : value;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  if ([r, g, b].some((n) => Number.isNaN(n))) return `rgba(244, 241, 234, ${alpha})`;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function withAlpha(color: string, alpha: number): string {
  return color.startsWith('#') ? hexToRgba(color, alpha) : color;
}