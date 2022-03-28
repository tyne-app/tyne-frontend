import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-phone-ngx',
  templateUrl: './phone-ngx.component.html',
  styleUrls: ['./phone-ngx.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=> PhoneNgxComponent),
    multi: true
  }]
})
export class PhoneNgxComponent implements OnInit, ControlValueAccessor {
  
  
  @Input() public placeHolder!: string;
  @Output() public changed = new EventEmitter<string>();
  @Input() public error!: string;


  private propageChange: any = () => {};
  private propageTouched: any = () => {};

  public value!:string;
  public isDisabled!: boolean;
        
  public constructor() { }

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

}
