import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AllJobsComponent } from './pages/all-jobs/all-jobs.component';
import { JobComponent } from './global/components/job/job.component';
import { EnterClientInfoComponent } from './pages/enter-client-info/enter-client-info.component';
import { CreateJobComponent } from './pages/create-job/create-job.component';

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
    path: 'enter-client-info',
    component: EnterClientInfoComponent
  },
  {
    path: 'job/:id',
    component: JobComponent
  },
  {
    path: 'create-job',
    component: CreateJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
