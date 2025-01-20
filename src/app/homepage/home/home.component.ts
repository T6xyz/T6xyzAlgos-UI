import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements AfterViewInit {
  path: string = "/assets/T6xyzLogo.png";
  path1: string = "assets/Example-Lecture2.png";
  pathInstagram: string = "assets/instagramLogo.png";
  pathLinkedin: string = "assets/linkedinLogo.png";
  pathYoutube: string = "assets/youtubeLogo.png";
  pathPage1: string = "assets/homepage1.mp4";
  pathPage2: string = "assets/homepage2.mp4";
  pathPage3: string = "assets/homepage3.mp4";
  pathPage4: string = "assets/homepage4.mp4";

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      })
    })
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));  
  }
}

