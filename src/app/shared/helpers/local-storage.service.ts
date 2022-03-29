import { Injectable } from '@angular/core';
import { CryptoService } from './crypto.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public constructor(
    private cryptoService: CryptoService
  ) { }

  public setValue(key:string,value:string):void {
    const encryptedValue:string = this.cryptoService.encrypt(value);
    if(encryptedValue){
      localStorage.setItem(key,encryptedValue);
    }
  }

  public getValue(key:string):string{
    const value = localStorage.getItem(key);
    if(value){
      return this.cryptoService.decrypt(value);
    }else{
      return null;
    }
  }
}
