import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child2-child',
  standalone: true,
  imports: [],
  templateUrl: './child2-child.component.html',
  styleUrl: './child2-child.component.css'
})
export class Child2ChildComponent {

  child2Data: string = "I'm Child 2 Content";
  @Output() child2Event = new EventEmitter();
  sendData() {
    this.child2Event.emit(this.child2Data);
  }


  // data from parent
  @Input() parentData: string = '';

  // data from child1
  @Input() child1Data: string = '';




}
