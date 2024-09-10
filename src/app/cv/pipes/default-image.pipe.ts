import { Pipe, PipeTransform } from '@angular/core';
import { APP_CONFIG } from 'src/app/config/constantes.config';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    // if(path.trim() == '') {
    //   return APP_CONFIG.defaultImage
    // } else {
    //   return path;
    // }
    return path.trim() ? path : APP_CONFIG.defaultImage;
  }

}
