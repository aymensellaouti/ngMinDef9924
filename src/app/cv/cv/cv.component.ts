import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  now = new Date();
  selectedCv: Cv | null = null;
  logger = inject(LoggerService);
  /**
   * la liste des cvs à gérer
   */
  cvs: Cv[] = [
    new Cv(
      1,
      'Louati',
      'Neder',
      20,
      '1234',
      'Ingénieur',
      '           '
    ),
    new Cv(
      2,
      'Bahri',
      'Maissa',
      20,
      '12345',
      'Ingénieur',
      'rotating_card_profile.png'
    ),
    new Cv(
      3,
      'Sellaouti',
      'Aymen',
      42,
      '123456',
      'Enseignant',
      ''
    ),
  ];
  constructor() {
    this.logger.log('CvComponent');
  }
  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
