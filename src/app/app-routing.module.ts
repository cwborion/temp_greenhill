import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AllJobsComponent } from './pages/all-jobs/all-jobs.component';
import { JobComponent } from './global/components/job/job.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'all-jobs',
    component: AllJobsComponent
  },
  {
    path: 'job/:id',
    component: JobComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
