import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child2-parent',
  standalone: true,
  imports: [],
  templateUrl: './child2-parent.component.html',
  styleUrl: './child2-parent.component.css'
})
export class Child2ParentComponent {


  // get data from parent
  @Input({ required: true, alias: "dataFromParent" }) dataFromParent: string = '';

  // send data to parent
  child1Content: string = "I'm Child1 Content"; // data to send
  @Output() childEvent = new EventEmitter();

  sendData() {
    this.childEvent.emit(this.child1Content);
  }



  @Input() dataFromChild2: string = '';

}
