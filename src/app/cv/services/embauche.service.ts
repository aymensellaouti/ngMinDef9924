import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';


@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  private embauchees: Cv[] = [];

  constructor() {}

  /**
   *
   * Retourne la liste des embauchees
   *
   * @returns CV[]
   *
   */
  getEmbauchees(): Cv[] {
    return this.embauchees;
  }

  /**
   *
   * Embauche une personne si elle ne l'est pas encore
   * Sinon il retourne false
   *
   * @param cv : Cv
   * @returns boolean
   */
  hire(cv: Cv): boolean {
    const index = this.embauchees.indexOf(cv);
    if (index == -1) {
      this.embauchees.push(cv);
      return true;
    }
    return false;
  }
}
