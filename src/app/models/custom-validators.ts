import { AbstractControl } from "@angular/forms";

export class CustomValodators {
  static GenderValidator(control: AbstractControl){
    if(['boy', 'girl', 'unisex'].includes(control.value)){
      return null;
    } else {
      return { gender: true }
    }
  }

}
