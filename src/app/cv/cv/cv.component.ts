import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  now = new Date();
  selectedCv: Cv | null = null;
  logger = inject(LoggerService);
  cvService = inject(CvService);
  /**
   * la liste des cvs à gérer
   */
  cvs: Cv[] = this.cvService.getCvs();
  constructor() {
    this.logger.log('CvComponent');
  }
  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
