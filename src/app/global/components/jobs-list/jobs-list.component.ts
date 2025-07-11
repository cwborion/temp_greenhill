import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../../models/job.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.scss',
  standalone: false
})
export class JobsListComponent implements OnInit {
  @Input() jobs: Job[] = [];
  searchTerm: string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  navigateToJob(job: Job) {
    this.router.navigate(['/job', job.id]);
  }
  
  filteredJobs(): Job[] {
  const term = this.searchTerm.toLowerCase();
  return this.jobs.filter(job =>
    `${job.clientName.firstName} ${job.clientName.lastName}`.toLowerCase().includes(term) ||
    `${job.address.street} ${job.address.city} ${job.address.state} ${job.address.zip}`.toLowerCase().includes(term)
  );
}


  onCreateJob(): void {
    // TODO: Navigate to job creation route or open modal
    console.log('Create Job clicked');
  }

}
