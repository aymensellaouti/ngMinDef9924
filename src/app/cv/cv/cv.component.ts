import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { CvService } from '../services/cv.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: []
})
export class CvComponent {
  now = new Date();
  cvService = inject(CvService);
  toastr = inject(ToastrService);
  // Méthode 1
  //selectedCv: Cv| null = null;
  selectedCv$: Observable<Cv> = this.cvService.selectedCv$;
  logger = inject(LoggerService);
  /**
   * la liste des cvs à gérer
   */
  cvs: Cv[] = [];
  constructor() {
    this.logger.log('CvComponent');
    this.cvService.getCvs().subscribe({
      next: (cvsFromApi) => {
        this.cvs = cvsFromApi;
      },
      error: (err) => {
        this.cvs = this.cvService.getFakeCvs();
        this.toastr.error(`Attention les données sont fictives merci de contacter l'admin :(`);
      }
    })
    // Méthode 1
    //this.cvService.selectedCv$.subscribe( cv => this.selectedCv = cv);
  }
  // onForwardCv(cv: Cv) {
  //   this.selectedCv = cv;
  // }
}
