import {Injectable} from '@angular/core';
import {AES, enc, lib, } from 'crypto-js';
// todo: https://www.npmjs.com/package/crypto-gcm

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private key = "sayonara";

  public constructor() { }

  public encrypt(valueToEncrypt: string): string {
    const valueEncrypted: lib.CipherParams = AES.encrypt(valueToEncrypt,this.key);
    return valueEncrypted.toString();
  }

  public decrypt(valueToDecrypt: lib.CipherParams | string): string {
    return AES.decrypt(valueToDecrypt, this.key).toString(enc.Utf8);
  }
}
