import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css'],
})
export class ItemCvComponent {
  // State du composant
  @Input({ required: true })
  cv!: Cv;
  @Input()
  size = 50;

  @Output()
  selectCv = new EventEmitter<Cv>();

  onSelectCv() {
    this.selectCv.emit(this.cv);
  }
}
