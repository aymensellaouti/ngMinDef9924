import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  // State
  isHidden = true;
  buttonName = 'show';
  name = 'MinDef';
  message = '';
  // behaviour
  showHide() {
    this.isHidden = !this.isHidden;
    this.buttonName == 'hide' ? this.buttonName = 'show' : this.buttonName = 'hide';
  }
}
