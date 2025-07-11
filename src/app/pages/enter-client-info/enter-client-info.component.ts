import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enter-client-info',
  templateUrl: './enter-client-info.component.html',
  styleUrls: ['./enter-client-info.component.scss'],
  standalone: false
})
export class EnterClientInfoComponent implements OnInit {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      zip: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$') // 12345 or 12345-6789
      ])
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
    } else {
      this.form.markAllAsTouched();
      console.warn('Form is invalid:', this.form.errors);
    }
  }
}
