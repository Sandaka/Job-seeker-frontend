import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatSelect } from '@angular/material/select';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

interface Skill {
  id: string;
  name: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  viewProviders: [MatExpansionPanel]
})
export class SkillsComponent implements OnInit, AfterViewInit, OnDestroy {

  protected skills: Skill[] = [
    { id: '1', name: 'Microservices' },
    { id: '2', name: 'Jenkins' },
    { id: '3', name: 'Docker' },
    { id: '4', name: 'Kubernetes' },
    { id: '5', name: 'AWS' },
    { id: '6', name: 'NoSQL' },
    { id: '7', name: 'SQL' },
  ];

  public skillMultiCtrl: FormControl = new FormControl();
  public skillMultiFilterCtrl: FormControl = new FormControl();
  public filteredSkillsMulti: ReplaySubject<Skill[]> = new ReplaySubject<Skill[]>(1);


  @ViewChild('multiSelect', { static: true }) multiSelect!: MatSelect;

  protected _onDestroy = new Subject();

  constructor() { }

  ngOnInit() {
    this.skillMultiCtrl.setValue(this.skills[1]);
    this.filteredSkillsMulti.next(this.skills.slice());

    this.skillMultiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterSkillMulti();
      });
  }

  /**
   * Write code on Method
   *
   * method logical code
   */
  ngAfterViewInit() {
    this.setInitialValue();
  }

  /**
   * Write code on Method
   *
   * method logical code
   */
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /**
   * Write code on Method
   *
   * method logical code
   */
  protected setInitialValue() {
    this.filteredSkillsMulti
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        this.multiSelect.compareWith = (a: Skill, b: Skill) => a && b && a.id === b.id;
      });
  }

  /**
   * Write code on Method
   *
   * method logical code
   */
  protected filterSkillMulti() {
    if (!this.skills) {
      return;
    }

    let search = this.skillMultiFilterCtrl.value;
    if (!search) {
      this.filteredSkillsMulti.next(this.skills.slice());
      return;
    } else {
      search = search.toLowerCase();
    }

    this.filteredSkillsMulti.next(
      this.skills.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
    );
  }

}
