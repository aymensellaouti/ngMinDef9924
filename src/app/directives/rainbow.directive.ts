import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appRainbow][type=text]',
})
export class RainbowDirective {
  // Chneya bech ngérie
  @HostBinding('style.color') color = 'black';
  @HostBinding('style.borderColor') bc = 'black';
  constructor() {
    console.log('rainbow directive');
  }

  // Chneya el comportement
  @HostListener('keyup') onKeyUp() {
    this.bc = this.color = this.getRandomcolor();
  }

  private getRandomcolor(): string {
    return (
      '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0')
    );
  }
}
