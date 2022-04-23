import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { CreateResumeComponent } from './create-resume/create-resume.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { EducationDetailComponent } from './education-detail/education-detail.component';
import { ExperienceDetailComponent } from './experience-detail/experience-detail.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ProfessionalQualificationComponent } from './professional-qualification/professional-qualification.component';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [
    PersonalDetailComponent,
    CreateResumeComponent,
    EducationDetailComponent,
    ExperienceDetailComponent,
    ProfessionalQualificationComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatSortModule,
    MatNativeDateModule,
    MatCheckboxModule
  ]
})
export class ResumeModuleModule { }
