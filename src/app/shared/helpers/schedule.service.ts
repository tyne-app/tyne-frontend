import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  public constructor() { }

  public getDay = (dayNumber: number): string => dayNumber == 0
  ? "Lunes"
  : dayNumber == 1
    ? "Martes"
    : dayNumber == 2
      ? "Miércoles"
      : dayNumber == 3
        ? "Jueves"
        : dayNumber == 4
          ? "Viernes"
          : dayNumber == 5
            ? "Sábado"
            : "Domingo";


  public getLetterOfDay = (dayNumber: number): string => dayNumber == 0
  ? "L"
  : dayNumber == 1
    ? "M"
    : dayNumber == 2
      ? "M"
      : dayNumber == 3
        ? "J"
        : dayNumber == 4
          ? "V"
          : dayNumber == 5
            ? "S"
            : "D";
  
  
  public getPeriodOfTime(hour: string): string {
    const hourFormated = +hour.substring(0, 2);
    if (hourFormated >= 0 && hourFormated < 12) 
      return "AM";
    else 
      return "PM";
  }


}
