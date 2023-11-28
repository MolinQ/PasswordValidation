import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Validator } from '../Validators/PasswordValidator';
@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent {
  form: FormGroup;
  passwordStatus: string = '';
  constructor(private fb: FormBuilder,) {
    this.form = this.fb.group({
      password:['', [Validator.PasswordValidator]]
    });
  }
  updateStatus() {
    if (this.form.get('password')) {
      if(this.form.get('password')!.errors){
        this.passwordStatus = this.form.get('password')!.errors!['PasswordStatus']
      } else this.passwordStatus = ''
    };
  }
}