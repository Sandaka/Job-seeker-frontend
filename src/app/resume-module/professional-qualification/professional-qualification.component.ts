import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-professional-qualification',
  templateUrl: './professional-qualification.component.html',
  styleUrls: ['./professional-qualification.component.scss'],
  viewProviders: [MatExpansionPanel]
})
export class ProfessionalQualificationComponent implements OnInit {

  profesionalQualificationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.profesionalQualificationForm = this.formBuilder.group({
      pqList: this.formBuilder.array([])
    })

    this.addQualification();
  }

  pqList(): FormArray {
    return this.profesionalQualificationForm.get('pqList') as FormArray;
  }

  newQualification(): FormGroup {
    return this.formBuilder.group({
      qualification: '',
      institute: '',
      grade: ''
      //education: this.formBuilder.array([])
    })
  }

  addQualification() {
    this.pqList().push(this.newQualification());
  }

  removeQualification(pqIndex: number) {
    this.pqList().removeAt(pqIndex);
  }

  onSubmit() {
    console.log(this.profesionalQualificationForm.value)
  }
}
