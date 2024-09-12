import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css'],
})
export class ListCvComponent {
  @Input({ alias: 'cvsList' })
  cvs: Cv[] = [];
  // @Output()
  // forwardCv = new EventEmitter<Cv>();
  // forwardSelectedCv(cv: Cv) {
  //   this.forwardCv.emit(cv);
  // }
}
