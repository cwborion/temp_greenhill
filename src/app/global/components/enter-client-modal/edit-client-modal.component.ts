import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Job } from 'src/app/global/models/job.model';

@Component({
  selector: 'app-edit-client-modal',
  templateUrl: './edit-client-modal.component.html',
  styleUrls: ['./edit-client-modal.component.scss'],
  standalone: false
})
export class EditClientModalComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditClientModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Job,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: [this.data?.clientName?.firstName || ''],
      lastName: [this.data?.clientName?.lastName || ''],
      street: [this.data?.address?.street || ''],
      city: [this.data?.address?.city || ''],
      state: [this.data?.address?.state || ''],
      zip: [this.data?.address?.zip || '']
    });
  }

  onSave(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value); // Send form data back to parent
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

