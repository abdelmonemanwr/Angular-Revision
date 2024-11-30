import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forms-binding.component.html',
  styleUrl: './forms-binding.component.css'
})
export class FormsBindingComponent {
  textBanana: string = '';

  course: string = '';


}
