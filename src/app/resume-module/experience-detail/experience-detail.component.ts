import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.scss'],
  viewProviders: [MatExpansionPanel]
})
export class ExperienceDetailComponent implements OnInit {

  disabled: boolean = false;

  experienceForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.experienceForm = this.formBuilder.group({
      expList: this.formBuilder.array([])
    })

    this.addExperience();
  }

  expList(): FormArray {
    return this.experienceForm.get('expList') as FormArray;
  }

  newExperience(): FormGroup {
    return this.formBuilder.group({
      companyName: '',
      designation: '',
      isCurrentJob: false,
      fromDate: '',
      toDate: '',
      description: ''
      //education: this.formBuilder.array([])
    })
  }

  addExperience() {
    this.expList().push(this.newExperience());
  }

  removeExperience(expIndex: number) {
    this.expList().removeAt(expIndex);
  }

  onSubmit() {
    console.log(this.experienceForm.value)
  }

}
