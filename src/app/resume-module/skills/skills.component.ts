import { Component, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  viewProviders: [MatExpansionPanel]
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
