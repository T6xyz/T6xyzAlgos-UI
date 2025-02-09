import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-landingpage',
  imports: [MatCardModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent implements AfterViewInit{
  path: string = "/assets/T6xyzLogo.png";
  pathDS: string = "assets/pageDS.mp4";
  circumference: number = 439.6;
  offset: number = 109.9;

  ngAfterViewInit(): void {

  }
  playVideo() {
    let video = <HTMLVideoElement> document.getElementById("dsCardVid")
    video?.play()
  }

  pauseVideo() {
    let video = <HTMLVideoElement> document.getElementById("dsCardVid")
    video?.pause();
    video.currentTime = 0;
  }
}
