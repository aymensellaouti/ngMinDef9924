import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {

  @Input()
  in = 'yellow';
  @Input()
  out = 'red';

  // Chneya bech ngérie
  @HostBinding('style.backgroundColor') bgc = this.out;
  constructor() {}
  ngOnInit(): void {
    this.bgc = this.out;
  }
  // Chneya el comportement
  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = this.in;
  }
  // Chneya el comportement
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = this.out;
  }
}
