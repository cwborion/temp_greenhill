import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
    standalone: false
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  onSubmit() {
    if (this.form.valid) {
      console.log('Email Submitted:', this.form.value.email);
      console.log('Password Submitted:', this.form.value.password);
    } else {
      console.log("this.form.get('password')?.hasError('minLength'): ", this.form.get('password')?.hasError('minLength'));
      console.log("!this.form.get('password')?.hasError('required'): ", !this.form.get('password')?.hasError('required'));
      this.form.markAllAsTouched();
    }
  }


}
