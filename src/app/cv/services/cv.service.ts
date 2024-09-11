import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';


@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [
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

  /**
   *
   * Retourne la liste des cvs
   *
   * @returns CV[]
   *
   */
  getCvs(): Cv[] {
    return this.cvs;
  }

  getCvById(id: number): Cv | null {
    return this.cvs.find(cv => cv.id === +id) ?? null;
  }

  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index != -1) {
      this.cvs.splice(index, 1);
    }
    return false;
  }

}
