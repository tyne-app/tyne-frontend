import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatar'
})
export class AvatarPipe implements PipeTransform {

  public transform(urlImage: string | ArrayBuffer): string | ArrayBuffer{
    return (urlImage) ? urlImage : "/assets/img/user-profile.svg";
  }

}
