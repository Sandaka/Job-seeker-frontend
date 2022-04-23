import { Component, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-professional-qualification',
  templateUrl: './professional-qualification.component.html',
  styleUrls: ['./professional-qualification.component.scss'],
  viewProviders: [MatExpansionPanel]
})
export class ProfessionalQualificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
