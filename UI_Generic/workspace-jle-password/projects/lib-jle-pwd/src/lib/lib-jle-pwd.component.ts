import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-jle-pwd',
  templateUrl:'./lib-jle-pwd.component.html',
  styleUrls: ['./lib-jle-pwd.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LibJlePwdComponent),
      multi: true
    }
  ]
})
export class LibJlePwdComponent implements ControlValueAccessor {

  hidePassword = true;

  @Input () placeholder = '';
  @Input () label = '';

  constructor() { }

  onChange: any = () => {}
  onTouch: any = () => {}
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  input: string = '';
  writeValue(input: string) {
    this.input = input;
  }
}
