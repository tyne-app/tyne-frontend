import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type PasswordType = 'password' | 'text';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=> PasswordComponent),
    multi: true
  }]
})
export class PasswordComponent implements OnInit, ControlValueAccessor {
  public value!:string;
  public isDisabled!: boolean;
  public passwordType!: PasswordType;
  public hide = true;

  @Input() public placeHolder!: string;
  @Output() public changed = new EventEmitter<string>();
  @Input() public error!: string;

  private propageChange: any = () => {};
  private propageTouched: any = () => {};
  
  
  public constructor() {
    this.passwordType = 'password';
   }
  
  public ngOnInit(): void {
  }
  
  public writeValue(value: string): void {
    this.value = value;
  }
  public registerOnChange(fn: any): void {
    this.propageChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.propageTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public onKeyup(event: Event):void{
    const {target} = event;
    this.value = ( target as HTMLInputElement).value;
    this.propageChange(this.value);
    this.changed.emit(this.value);
  }

  public onBlur(): void{
    this.propageTouched();
  }

  public togglePassword(): void{
    this.passwordType = this.passwordType == 'password' ? 'text' : 'password';
  }


}
