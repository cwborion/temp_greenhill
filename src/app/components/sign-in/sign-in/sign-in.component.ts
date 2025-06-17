import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.email])
  });

  onSubmit() {
    if (this.form.valid) {
      console.log('Email Submitted:', this.form.value.email);
      console.log('Password Submitted:', this.form.value.password);
    } else {
      this.form.markAllAsTouched();
    }
  }


}
