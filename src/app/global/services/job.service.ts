import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, map } from 'rxjs';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private mockJobsUrl = 'assets/mock-jobs.json';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.mockJobsUrl).pipe(
      delay(500) // Simulate network delay
    );
  }

  getJobById(id: string): Observable<Job | undefined> {
    return this.getJobs().pipe(
      // Simulate filtering logic (in a real API, this would be a specific endpoint)
      map(jobs => jobs.find(job => job.id === id))
    );
  }
}
