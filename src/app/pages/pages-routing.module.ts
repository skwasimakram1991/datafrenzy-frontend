import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { JobMatchChoiceComponent } from './job-match-choice/job-match-choice.component';
import { InterviewComponent } from './interview/interview.component';
import { ResumeBoostComponent } from './resume-boost/resume-boost.component';
import { JobsComponent } from './jobs/jobs.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { SearchJobsComponent } from './search-jobs/search-jobs.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ResumeTemplateComponent } from './resume-template/resume-template.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
  },
  {
    path: 'new-password',
    component: NewPasswordComponent,
  },
  {
    path: 'job-match-choice',
    component: JobMatchChoiceComponent,
  },
  {
    path: 'interview',
    component: InterviewComponent,
  },
  {
    path: 'resume-boost',
    component: ResumeBoostComponent,
  },
  {
    path: 'jobs',
    component: JobsComponent,
  },
  {
    path: 'resume-builder',
    component: ResumeBuilderComponent,
  },
  {
    path: 'search-jobs',
    component: SearchJobsComponent,
  },
  {
    path: 'job-details',
    component: JobDetailsComponent,
  },
  {
    path: 'resume-templates',
    component: ResumeTemplateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
