import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/global/models/job.model';
import { JobService } from 'src/app/global/services/job.service';
import { MatDialog } from '@angular/material/dialog';
import { EditClientModalComponent } from 'src/app/global/components/enter-client-modal/edit-client-modal.component';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss'],
  standalone: false
})
export class CreateJobComponent implements OnInit {
  job!: Job;
  stageOptions: string[] = ['Sales', 'Design', 'Active', 'Archived'];

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // ✅ Mock data for display and modal
    this.job = {
      id: '12345',
      clientName: {
        firstName: 'John',
        lastName: 'Smith'
      },
      email: 'john.smith@example.com',
      address: {
        street: '123 Maple St',
        city: 'Springfield',
        state: 'IL',
        zip: '62704'
      },
      stage: 'Sales',
      createdAt: '2024-12-01T10:00:00Z',
      qrCodeLink: 'https://www.yahoo.com',
      projects: []
    };
  }

  openEditClientModal(): void {
    const dialogRef = this.dialog.open(EditClientModalComponent, {
      // width: '6rem',
      maxWidth: '6orem',
      data: this.job
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.job = {
          ...this.job,
          clientName: {
            firstName: result.firstName,
            lastName: result.lastName
          },
          address: {
            street: result.street,
            city: result.city,
            state: result.state,
            zip: result.zip
          }
        };
      }
    });
  }
  
}


