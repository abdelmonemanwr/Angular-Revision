import { Component, Output } from '@angular/core';
import { Child2ParentComponent } from '../child2-parent/child2-parent.component';
import { Child2ChildComponent } from "../child2-child/child2-child.component";

@Component({
  selector: 'app-parent2-child',
  standalone: true,
  imports: [Child2ParentComponent, Child2ChildComponent],
  templateUrl: './parent2-child.component.html',
  styleUrl: './parent2-child.component.css'
})
export class Parent2ChildComponent {
  // data for projection in current component and to send to child 1 component
  title: string = 'Men3m';

  // data received from child 1 component
  datatoChild2: string = '';



  receivedFromChild1: string = '';

  getDataFromChild1(data: string) {
    this.receivedFromChild1 = data;
    this.datatoChild2 = this.receivedFromChild1;
  }


  receivedFromChild2: string = '';
  getDataFromChild2(data: string) {
    this.receivedFromChild2 = data;
  }


}
