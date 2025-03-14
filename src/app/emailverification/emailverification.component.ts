import { Component } from '@angular/core';

@Component({
  selector: 'app-emailverification',
  imports: [],
  templateUrl: './emailverification.component.html',
  styleUrl: './emailverification.component.scss'
})
export class EmailverificationComponent {
  email: string = "T6xyz@gmail.com";
  source: string = "assets/checkmark.png";
}
