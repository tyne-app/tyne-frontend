import {Injectable} from '@angular/core';
import {JPGType, PNGType} from '@shared/inmutable/constants/file-type';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  public constructor() { }

  public isValidFormatImageToUpload = ( {type: formatType}: File): boolean => {
    switch (formatType) {
      case PNGType:
        return true;
      case JPGType:
        return true;
      default:
        return false;
    }
  }

}
