import { Component, inject, Input } from '@angular/core';
import { Cv } from '../model/cv.model';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css']
})
export class CvCardComponent {
  @Input()
  cv: Cv | null = null;
  embaucheService = inject(EmbaucheService);
  toastr = inject(ToastrService)
  hire() {
    if(this.cv) {
      if(this.embaucheService.hire(this.cv)) {
        this.toastr.success(`${this.cv.name} has been hired successfully`);
      } else {
        this.toastr.warning(`${this.cv.name} is already hired`);
      }
    }
  }
}
