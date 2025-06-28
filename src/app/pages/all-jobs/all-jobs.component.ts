import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/global/models/job.model';
import { JobService } from 'src/app/global/services/job.service';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrl: './all-jobs.component.scss',
  standalone: false
})
export class AllJobsComponent implements OnInit {

  activeJobs: Job[] = [];
  archivedJobs: Job[] = [];
  salesJobs: Job[] = [];
  designJobs: Job[] = [];

  constructor(
    private jobService: JobService
  ) { }

  ngOnInit(): void {
    // Temporary mock data, replace with DB/API later
    this.jobService.getJobs().subscribe(jobs => {
      this.activeJobs = jobs.filter(job => job.stage === 'Active');
      this.archivedJobs = jobs.filter(job => job.stage === 'Archived');
      this.salesJobs = jobs.filter(job => job.stage === 'Sales');
      this.designJobs = jobs.filter(job => job.stage === 'Design');
    });
  }

}
