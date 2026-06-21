import { Component, forwardRef } from '@angular/core';
import { AbstractComponent } from '../abstract-component';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

export const VALUE_ACCESSOR_PROVIDER = [
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => StringInputComponent),
    multi: true
  },
  {
    provide: NG_VALIDATORS,
    multi: true,
    useExisting: forwardRef(() => StringInputComponent),
  }
];

@Component({
  standalone: false,
  selector: 'app-string-input',
  providers: [VALUE_ACCESSOR_PROVIDER],
  template: `
    <div class="form-group row">
      <div class="col-sm-10">
        <label class="col-sm-10 col-form-label col-form-label-sm">{{ this.inputTitle() }}</label>
        <input type="text" class="form-control form-control-sm" [(ngModel)]="value" (change)="onChange()" (keyup)="onTouch()" />
        @if(validationText()){
          <div class="invalid-feedback d-block">{{validationText()}}</div>
        }
      </div>
    </div>`
})
export class StringInputComponent extends AbstractComponent {}
