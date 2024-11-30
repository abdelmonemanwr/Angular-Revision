import { Component } from '@angular/core';

@Component({
  selector: 'app-inner',
  standalone: true,
  imports: [],
  templateUrl: './inner.component.html',
  styleUrl: './inner.component.css'
})
export class InnerComponent {
  innertext: string = "text from the inner component";
  innerMethod(name:string='men3m'):string{
    return `welcome ${name}`;
  }
}
