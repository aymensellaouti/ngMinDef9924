import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable } from 'rxjs';

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
    //  setTimeout(() => {
       this.myObservable$
         // 5 4 3 2 1
         .subscribe({
           next: (val) => {
             console.log(val);
           },
         });
    //  }, 3000)

     this.myObservable$
     // 5 4 3 2 1
     .pipe(
      map(data => data * 3),
      // 15 12 9 6 3
      filter(element => element % 2 == 0 )
      // 12 6
     )
     .subscribe({
      next: (data) => {
        this.toastr.info('' + data);
      },
      complete: () => {
        this.toastr.error('BOOOOOOOM !!!!!');
      }
     })
  }
}
