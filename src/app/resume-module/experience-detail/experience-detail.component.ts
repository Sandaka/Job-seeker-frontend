import { Component, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.scss'],
  viewProviders: [MatExpansionPanel]
})
export class ExperienceDetailComponent implements OnInit {

  disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
