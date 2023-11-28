import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent {
 
  form: FormGroup
  circle1: string = 'gray';
  circle2: string = 'gray';
  circle3: string = 'gray';
  Letters = /[a-zA-Z]/;
  Numbers = /\d/;
  Symbols = /[!@#$%^&*(),.?":{}|<>]/;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      password:['']
    })
  }

  ngOnInit() {
    this.form.get('password')?.valueChanges.subscribe(value => {
      const hasLetters = this.Letters.test(value);
      const hasNumbers = this.Numbers.test(value);
      const hasSymbols = this.Symbols.test(value);

      if (value.length === 0) {
        this.circle1 = this.circle2 = this.circle3 = 'gray';
      } else if (value.length < 8) {
        this.circle1 = this.circle2 = this.circle3 = 'red';
      } else if (hasLetters && hasNumbers && hasSymbols) {
        this.circle1 = this.circle2 = this.circle3 = 'green';
      } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
        this.circle1 = this.circle2 = 'yellow';
        this.circle3 = 'gray';
      } else {
        this.circle1 ='red'; this.circle2 = this.circle3 = 'gray';
      }
    });
  }
}