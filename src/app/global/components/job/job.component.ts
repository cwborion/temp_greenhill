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
  job: Job | undefined;

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.jobService.getJobById(id).subscribe(job => {
        this.job = job;
      });
    } else {
      // handle missing id case, e.g. show error or navigate away
      console.log('No ID present!');
    }
  }


}
