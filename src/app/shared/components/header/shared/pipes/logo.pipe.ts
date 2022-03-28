import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'logo'
})
export class LogoPipe implements PipeTransform {

  public whiteLogo = 'assets/icons/tyne-logo-white.png';
  public colorLogo = 'assets/icons/tyne-logo-color.png';

  public transform(isWhiteLogo: boolean): string {
    return (isWhiteLogo)? this.whiteLogo: this.colorLogo;
  }

}
