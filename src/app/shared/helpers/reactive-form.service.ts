import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ReactiveFormService {

  public constructor() { }

  public clearAllFormControls(reactiveForm:FormGroup):void {
    for(const name in reactiveForm.controls) {
      (<FormControl>reactiveForm.controls[name]).setValue('');
      reactiveForm.controls[name].setErrors(null);
    }
  }

}
