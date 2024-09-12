import { Component, inject, OnInit } from '@angular/core';
import { Cv } from '../model/cv.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { APP_ROUTES } from 'src/app/config/app-routes.config';
import { AuthService } from 'src/app/auth/services/auth.service';



@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  cv: Cv | null = null;
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  cvService = inject(CvService);
  authService = inject(AuthService);
  constructor() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.cvService.getCvById(id).subscribe({
      next: (cvFromApi) => {
        this.cv = cvFromApi;
      },
      error: (err) => {
        this.router.navigate([APP_ROUTES.cv]);
      },
    });
  }

  deleteCv() {
    if(this.cv) {
      this.cvService.deleteCvById(this.cv.id).subscribe({
        next: () => {this.router.navigate([APP_ROUTES.cv]);},
        error: (e) => {console.log(e);}
      });

    }
  }
}

