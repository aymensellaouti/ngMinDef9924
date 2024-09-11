import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  template: `
    <p>Second component Works</p>
  `,
  styles: [``]
})
export class SecondComponent {
  activatedRoute = inject(ActivatedRoute);
  constructor() {
    console.log(this.activatedRoute.snapshot.params['id']);

  }
}
