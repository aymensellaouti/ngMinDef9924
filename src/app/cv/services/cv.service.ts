import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';


@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];


  constructor() {

  }

  /**
   *
   * Retourne la liste des cvs
   *
   * @returns CV[]
   *
   */
  getCvs(): Cv[] {
    return [];
  }
}
