import { Component, Input, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { CreateResumeComponent } from '../create-resume/create-resume.component';

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.scss'],
  viewProviders: [MatExpansionPanel]
})
export class EducationDetailComponent implements OnInit {

  @Input()
  index!: number;

  public unique_key!: number;
  public parentRef!: CreateResumeComponent;

  constructor() { }

  ngOnInit(): void {
  }

  remove_me() {
    console.log("removing1... " + this.unique_key)
    this.parentRef.remove(this.unique_key)
  }

}
