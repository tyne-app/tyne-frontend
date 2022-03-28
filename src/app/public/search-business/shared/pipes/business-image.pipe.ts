import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'businessImage'
})
export class BusinessImagePipe implements PipeTransform {

  public transform(urlImage: string): string {
    return urlImage ? urlImage : "/assets/img/local_by_default.png";
  }

}
