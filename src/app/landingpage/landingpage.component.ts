import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ProfilebarComponent } from '../profilebar/profilebar.component';
import { NgIf } from '@angular/common';
import { InfobarComponent } from '../infobar/infobar.component';
import { Router, Routes } from '@angular/router';
import { DatastructurespageComponent } from '../datastructurespage/datastructurespage.component';
import { AlgorithmspageComponent } from '../algorithmspage/algorithmspage.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  imports: [MatCardModule, ProfilebarComponent, NgIf, InfobarComponent, RouterLink, RouterOutlet, AlgorithmspageComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent implements AfterViewInit {
  path: string = "/assets/T6xyzLogo.png";
  pathDS: string = "assets/pageDS.mp4";
  pathA: string = "assets/pageA.mp4";
  profilePic: string = "assets/profile.jpg";

  ngAfterViewInit(): void {
    document.addEventListener("click", (event) => {
      let id = <HTMLElement> event.target;
      let profile = <HTMLElement> document.getElementById("profileMain")
      if (id !== null && id.id !== "icon" && !(id.id === "profileMain" && profile.classList.contains("show"))) {
        if (profile !== null) {
          profile.classList.remove("show")
          profile.classList.add("hidden")
        }
      }
    });
  }
  playVideo(type: string) {
    let video = <HTMLVideoElement> document.getElementById("dsCardVid")
    if (type === "a") {
      video = <HTMLVideoElement> document.getElementById("aCardVid")
    }
    video?.play()
  }

  pauseVideo(type: string) {
    let video = <HTMLVideoElement> document.getElementById("dsCardVid")
    if (type === "a") {
      video = <HTMLVideoElement> document.getElementById("aCardVid")
    }
    video?.pause();
    video.currentTime = 0;
  }
  toggleProfile() {
    let id = document.getElementById("profileMain")

    if (id?.classList.contains("hidden")) {
      id.classList.remove("hidden")
      id.classList.add("show")
    } else if (id !== null){
      id.classList.remove("show")
      id.classList.add("hidden")
    }
  }
}
