import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';
import { CreateResumeComponent } from '../create-resume/create-resume.component';

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.scss'],
  viewProviders: [MatExpansionPanel]
})
export class EducationDetailComponent implements OnInit {

  // @Input()
  // index!: number;

  // public unique_key!: number;
  // public parentRef!: CreateResumeComponent;

  educationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.educationForm = this.formBuilder.group({
      eduList: this.formBuilder.array([])
    })

    this.addEducation();
  }

  eduList(): FormArray {
    return this.educationForm.get('eduList') as FormArray;
  }

  newEducation(): FormGroup {
    return this.formBuilder.group({
      educationLevel: '',
      institute: '',
      fromDate: '',
      toDate: '',
      subject: '',
      grade: ''
      //education: this.formBuilder.array([])
    })
  }

  addEducation() {
    this.eduList().push(this.newEducation());
  }

  removeEducation(eduIndex: number) {
    this.eduList().removeAt(eduIndex);
  }

  onSubmit() {
    console.log(this.educationForm.value)
  }

  // remove_me() {
  //   console.log("removing1... " + this.unique_key)
  //   this.parentRef.remove(this.unique_key)
  // }

}
