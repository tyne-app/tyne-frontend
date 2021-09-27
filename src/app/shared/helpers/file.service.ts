import { Injectable } from '@angular/core';
import { JPGType, PNGType } from '../inmutable/constants/file-type';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  public constructor() { }

  public isValidFormatImageToUpload(file: File): boolean {
    const uploadFile: File = file;
    const { type: formatType } = uploadFile;
    switch (formatType) {
      case PNGType:
        return true;
      case JPGType:
        return true;
      default:
        return false;
    }
  } 
  /**TODO: Validate is name */
  public isFileName(file: File): boolean {
    return true;
  }

  public getObjectUrl(event: any): string {
    const file: File = event.target.files[0];
    const objectUrl = URL.createObjectURL(file);
    return objectUrl;
  }

  public compressImage(src, newX, newY) {
    return new Promise((res, rej) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        const elem = document.createElement("canvas");
        elem.width = newX;
        elem.height = newY;
        const ctx = elem.getContext("2d");
        ctx.drawImage(img, 0, 0, newX, newY);
        const data = ctx.canvas.toDataURL();
        res(data);
      };
      img.onerror = (error) => rej(error);
    });
  }

  // It doesn't work yet
  public fileToBase64(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      return reader.result;
    };
  }

}
