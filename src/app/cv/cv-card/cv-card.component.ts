import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv.model';


@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css']
})
export class CvCardComponent {
  @Input()
  cv: Cv | null = null;
}
