import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { NavComponent } from './global/components/nav/nav.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AllJobsComponent } from './pages/all-jobs/all-jobs.component';
import { JobsListComponent } from './global/components/jobs-list/jobs-list.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { JobComponent } from './global/components/job/job.component';
import { EnterClientInfoComponent } from './pages/enter-client-info/enter-client-info.component';
import { CreateJobComponent } from './pages/create-job/create-job.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditClientModalComponent } from './global/components/enter-client-modal/edit-client-modal.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    NavComponent,
    HomePageComponent,
    AllJobsComponent,
    JobsListComponent,
    JobComponent,
    EnterClientInfoComponent,
    CreateJobComponent,
    EditClientModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatDividerModule,
    MatTabsModule,
    FormsModule,
    CommonModule,
    MatExpansionModule,
    MatSelectModule
  ],
  providers: [
    provideHttpClient()
    // provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
