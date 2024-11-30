import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-check-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './check-directives.component.html',
  styleUrl: './check-directives.component.css'
})
export class CheckDirectivesComponent {
  names: string[] = ['Men3m', 'Ammar', 'Salah', 'Ali', 'Fahmy'];
  number: number = 0;


  favColor: string = '';

  isEven(): number{
    return this.number & 1 ^ 1;
  }

}
