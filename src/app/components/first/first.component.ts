import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  // State
  isHidden = true;
<<<<<<< HEAD
  buttonName = 'show';
=======
>>>>>>> 37dbb572a28c3f1a49c4823d4e56930892b3c927
  name = 'MinDef';
  message = '';
  // behaviour
  showHide() {
    this.isHidden = !this.isHidden;
<<<<<<< HEAD
    this.buttonName == 'hide' ? this.buttonName = 'show' : this.buttonName = 'hide';
=======
>>>>>>> 37dbb572a28c3f1a49c4823d4e56930892b3c927
  }
}
