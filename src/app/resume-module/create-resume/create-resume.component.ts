import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { EducationDetailComponent } from '../education-detail/education-detail.component';

@Component({
  selector: 'app-create-resume',
  templateUrl: './create-resume.component.html',
  styleUrls: ['./create-resume.component.scss']
})
export class CreateResumeComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;


  private _counter = 1;
  componentsReferences = Array<ComponentRef<EducationDetailComponent>>()


  child_unique_key: number = 0;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }


  createComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(EducationDetailComponent);

    let childComponentRef = this.container.createComponent(componentFactory);

    let childComponent = childComponentRef.instance;
    childComponent.unique_key = ++this.child_unique_key;
    childComponent.parentRef = this;

    // add reference for newly created component
    this.componentsReferences.push(childComponentRef);
  }


  add_education(): void {
    console.log("inside of add education...")
    // create the component factory
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(EducationDetailComponent);

    // add the component to the view
    let componentRef = this.container.createComponent(componentFactory);

    // pass some data to the component
    componentRef.instance.index = this._counter++;

    // add reference for newly created component
    this.componentsReferences.push(componentRef);
  }

  remove(index: number) {
    console.log("removing2... " + index)
    if (this.container.length < 1)
      return;

    let componentRef = this.componentsReferences.filter(
      x => x.instance.unique_key == index
    )[0];

    let vcrIndex: number = this.container.indexOf(componentRef as any);

    console.log("===== "+componentRef)
    // removing component from container
    this.container.remove(vcrIndex);

    // removing component from the list
    this.componentsReferences = this.componentsReferences.filter(
      x => x.instance.unique_key !== index
    );
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
