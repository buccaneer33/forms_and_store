import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValodators } from '../../models/custom-validators';

@Component({
  selector: 'app-commodity-form',
  imports: [ReactiveFormsModule],
  templateUrl: './commodity-form.html',
  styleUrl: './commodity-form.scss',
})
export class CommodityForm {
  fb = inject(FormBuilder);

  get controls(){
    return Object.values(this.mainForm.controls);
  }

  mainForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    price: [0, [Validators.required, Validators.max(10000000000)]],
    imageUrl:  ['', Validators.required],
    category:  ['', Validators.required],
    sizes:  ['', Validators.required],
    ageRange:  ['', Validators.required],
    gender:  ['', [Validators.required, CustomValodators.GenderValidator]],
    rating:  [0, Validators.required],
    isNew:  [false, Validators.required],
  })

  submitForm(){}
  showForm(){
    console.log(this.mainForm);
  }
}
