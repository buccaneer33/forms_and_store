import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextAreaInputComponent } from './components/textarea';
import { StringInputComponent } from './components/string-input';
import { NumberInputComponent } from './components/number-input';
import { CheckboxComponent } from './components/checkbox';

@NgModule({
  declarations: [
    TextAreaInputComponent,
    StringInputComponent,
    NumberInputComponent,
    CheckboxComponent,
  ],
  exports: [
    TextAreaInputComponent,
    StringInputComponent,
    NumberInputComponent,
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],

})
export class FormComponentsModule { }
