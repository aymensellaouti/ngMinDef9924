import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(message: unknown) {
    console.log('From Logger Service');
    console.log(message);
  }
}
