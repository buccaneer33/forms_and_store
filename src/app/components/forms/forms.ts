import { Component, inject, signal } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { form, Field } from '@angular/forms/signals';
import { FormField, required, email, minLength, maxLength} from '@angular/forms/signals';


interface LoginData {
  email: string;
  password: string;
  price: number;
}

@Component({
  selector: 'app-forms',
  //imports: [FormField],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
  imports: [FormField, ReactiveFormsModule],
})
export class Forms {
  formsBuilder = inject(FormBuilder);

  form1 = this.formsBuilder.group({
    title: ['', [Validators.required, Validators.maxLength(3)]],
    description: ['', [Validators.required, Validators.maxLength(5)]],
    price: [0, [Validators.min(0), Validators.max(10000000)]]
  });

  form2 = new FormGroup({
    title: new FormControl('', [Validators.required]),
  });

  form3 = new FormArray([
    new FormControl('')
  ]);

  loginModel = signal<LoginData>({
    email: '',
    password: '',
    price: 0
  })
  loginForm = form(this.loginModel, (field) => {
    required(field.email, { message: 'Name is required' });
    minLength(field.email, 2, {message: 'Minimal length is 2 chars'});
    maxLength(field.email, 50);
  });

  thedtg = signal<string[]>(['1', '2', '3']);

  submitForm(){

  }


}
