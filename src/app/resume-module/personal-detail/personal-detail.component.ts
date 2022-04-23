import { Component, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss'],
  viewProviders: [MatExpansionPanel]
})
export class PersonalDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }





  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
