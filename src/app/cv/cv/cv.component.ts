import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { CvService } from '../services/cv.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  now = new Date();
  cvService = inject(CvService);
  // Méthode 1
  //selectedCv: Cv| null = null;
  selectedCv$: Observable<Cv> = this.cvService.selectedCv$;
  logger = inject(LoggerService);
  /**
   * la liste des cvs à gérer
   */
  cvs: Cv[] = this.cvService.getCvs();
  constructor() {
    this.logger.log('CvComponent');
    // Méthode 1
    //this.cvService.selectedCv$.subscribe( cv => this.selectedCv = cv);
  }
  // onForwardCv(cv: Cv) {
  //   this.selectedCv = cv;
  // }
}
