import { Injectable } from '@angular/core';
import * as moment from "moment";
import { Moment } from "moment";

export interface DatePickerConfig{
  maxDate?: Date | Moment,
  minDate?: Date | Moment,
}

@Injectable({
  providedIn: 'root'
})
export class DateService {

  private minBirthDay = 18;
  private maxBirthDay = 100;
  private maxDayOfReservation = 7;

  public constructor() {}

  public setConfigDateOfBirthday(): DatePickerConfig{
    const currentYear = moment().year();
    const currentDay = moment().date();
    const currentMonth = moment().month();  

    const minDate = moment([currentYear-this.maxBirthDay]);
    const maxDate = moment([currentYear-this.minBirthDay])
                      .add(currentMonth, 'months')
                      .add(currentDay-1, 'days'); 
    return {
      maxDate: maxDate,
      minDate: minDate
    };
  }

  public setConfigReservatioDate(): DatePickerConfig{
    const minDate = moment();
    const maxDate = moment().add(this.maxDayOfReservation,'days');
    return {
      minDate: minDate,
      maxDate: maxDate
    };
  }

  public setConfigSearchBarDate(): DatePickerConfig{
    const minDate = moment();
    return {
      minDate: minDate
    };
  }


}
