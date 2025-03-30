import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { AfterViewInit } from '@angular/core';
import { InfobarComponent } from '../../infobar/infobar.component';
import { LandingService } from '../../landing.service';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, MatButtonModule, InfobarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements AfterViewInit, OnInit {
  path: string = "/assets/T6xyzLogo.png";
  pathPage1: string = "assets/homepage1.mp4";
  pathPage2: string = "assets/homepage2.mp4";
  pathPage3: string = "assets/homepage3.mp4";
  pathPage4: string = "assets/homepage4.mp4";

  constructor(private service: LandingService) {}

  ngOnInit(): void {
      this.service.getHome();
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showHome');
        } else {
          entry.target.classList.remove('showHome');
        }
      })
    })
    
    const hiddenElements = document.querySelectorAll('.hiddenHome');
    hiddenElements.forEach((el) => observer.observe(el));  
  }
}

