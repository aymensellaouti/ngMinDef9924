import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';
import { Subject } from 'rxjs';


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

  #selectedCvSubject$ = new Subject<Cv>();
  /**
   * Le flux des cvs sélectionnés
   */
  selectedCv$ = this.#selectedCvSubject$.asObservable();

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

  /**
   * Permet de notifier les personnes interessé par la selection d'un cv
   * qu'un cv a été sélectionné
   *
   * @param cv le Cv à ajouter dans le flux
   */
  selectCv(cv: Cv): void {
    // Tzid Cv fel Flux
    this.#selectedCvSubject$.next(cv);
  }
}
