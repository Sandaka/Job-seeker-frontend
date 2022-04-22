import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateResumeComponent } from './resume/create-resume/create-resume.component';
import { EducationDetailComponent } from './resume/education-detail/education-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: CreateResumeComponent,
  },
  {
    path: 'create',
    component: CreateResumeComponent,
  },
  {
    path: 'about',
    component: CreateResumeComponent,
  },
  {
    path: 'help',
    component: CreateResumeComponent,
  },
  {
    path: '**',
    component: CreateResumeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
