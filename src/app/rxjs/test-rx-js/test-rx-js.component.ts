import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-rx-js',
  templateUrl: './test-rx-js.component.html',
  styleUrls: ['./test-rx-js.component.css']
})
export class TestRxJsComponent {
  myObservable$: Observable<number>;
  toastr = inject(ToastrService);
  constructor() {
    this.myObservable$ = new Observable((observer) => {
       let i = 5;
       const intervalIndex = setInterval(() => {
         if (!i) {
           observer.complete();
           clearInterval(intervalIndex);
         }
         observer.next(i--);
       }, 1000);
     });
     setTimeout(() => {
       this.myObservable$.subscribe({
         next: (val) => {
           console.log(val);
         },
       });
     }, 3000)
     this.myObservable$.subscribe({
      next: (data) => {
        this.toastr.info('' + data);
      },
      complete: () => {
        this.toastr.error('BOOOOOOOM !!!!!');
      }
     })
  }
}
