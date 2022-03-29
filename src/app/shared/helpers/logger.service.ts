import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  public constructor(
    private logger: NGXLogger
  ) { }
  
  public writeGenericMessage(message?:string): void{
    this.logger.log(`${message}`);
  }
  public writeErrorMessage(message?:string, additional?: unknown): void{
    this.logger.error(`${message}`, additional);
  }
  public postLogger(message?:string): void{
    this.logger.info("Ha sido creado");
    this.logger.log(`${message}`);
  }
  public putLogger(message?:string): void{
    this.logger.info("Ha sido actualizado");
    this.logger.log(`${message}`);
  }
  public deleteLogger(message?:string): void{
    this.logger.info("Ha sido eliminado");
    this.logger.log(`${message}`);
  }
  public getLogger(message?:string): void{
    this.logger.info("Ha sido obtenido");
    this.logger.log(`${message}`);
  }

}
