import { Directive, input, signal } from "@angular/core";
import { ControlValueAccessor, FormControl, Validator } from "@angular/forms";
import { getErrorText } from "./validationErrors";

@Directive({})
export class AbstractComponent implements ControlValueAccessor {
  controlName = input<string>();
  value: any = null;
  inputTitle = input<string>();
  validationText = signal<string | null>(null);

  writeValue(data: any) {
    this.value = data;
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {
    this.propagateTouch = fn;
  }

  onChange(value?: any) {
    this.propagateChange(this.value);
  }
  onTouch(value?: any){
    this.propagateTouch(this.value);
  }

  propagateChange = (_: any) => { };
  propagateTouch = (_: any) => { };

  validate(c: FormControl) {
   setTimeout(() => {
    if(c.touched && c.invalid){
      const error = c.errors;
      console.log(error)
      if(error){
        this.validationText.set(getErrorText(Object.keys(c.errors)[0]))
      }
    } else {
      this.validationText.set(null);
    }
   }, 300)
  }
}
