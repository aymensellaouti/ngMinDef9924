import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {
  // State
  defaultColor = 'red';
  color = this.defaultColor;

  // coùportements
  changeColor(newColorInput: HTMLInputElement): void {
    this.color = newColorInput.value;
    newColorInput.value = '';
  }

  reset(): void {
    this.color = this.defaultColor;
  }
}
