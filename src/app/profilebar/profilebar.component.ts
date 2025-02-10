import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-profilebar',
  imports: [MatIconModule, MatButtonModule, MatDividerModule],
  templateUrl: './profilebar.component.html',
  styleUrl: './profilebar.component.css'
})

export class ProfilebarComponent implements AfterViewInit {
  profilePic: string = "assets/profile.jpg";
  profileName: string = "Ben Z"
  h1: string = "assets/profileIcon.png";
  h2: string = "assets/premium.png";
  h3: string = "assets/settings.png";

  ngAfterViewInit(): void {

  }
  toggleElement() {
    let curr = document.getElementById("profileMain")
    if (curr !== null) {
      curr.style.display = 'none';
    }
  }
}
