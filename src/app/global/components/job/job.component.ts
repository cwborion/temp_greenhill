import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../../models/job.model';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss',
  standalone: false
})
export class JobComponent implements OnInit {
  job?: Job;

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.jobService.getJobById(id).subscribe(job => {
        this.job = job;
        console.log(this.job);
      });
    } else {
      console.log('No ID present!');
    }
  }

  getJobLink(job: Job): string {
    return `https://yourapp.com/jobs/${job.id}`;
  }

  // Optional: getter for projects to avoid template errors if job is undefined
  get projects(): string[] {
    return this.job?.projects ?? [];
  }
}

