import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  path: string = "/assets/T6xyzLogo.png";
  path1: string = "assets/Example-Lecture2.png";
}
