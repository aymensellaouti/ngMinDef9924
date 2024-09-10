import { Component } from '@angular/core';

@Component({
  selector: 'app-lampe',
  templateUrl: './lampe.component.html',
  styleUrls: ['./lampe.component.css']
})
export class LampeComponent {
  isOpen = false;
  interrupteur() {
    this.isOpen = !this.isOpen;
  }
}
