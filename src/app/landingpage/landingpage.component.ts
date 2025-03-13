import { Component, viewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ProfilebarComponent } from '../profilebar/profilebar.component';
import { NgIf } from '@angular/common';
import { InfobarComponent } from '../infobar/infobar.component';
import { Router, Routes } from '@angular/router';
import { DatastructurespageComponent } from '../datastructurespage/datastructurespage.component';
import { AlgorithmspageComponent } from '../algorithmspage/algorithmspage.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  imports: [MatCardModule, ProfilebarComponent, NgIf, InfobarComponent, RouterLink, RouterOutlet, AlgorithmspageComponent, NgOptimizedImage],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent implements AfterViewInit, OnInit {
  path: string = "/assets/T6xyzLogo.png";
  pathDS: string = "assets/pageDS.jpg";
  pathA: string = "assets/pageA.jpg";
  profilePic: string = "assets/profile.jpg";

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    document.addEventListener("click", (event) => {
      let id = <HTMLElement> event.target;
      let profile = <HTMLElement> document.getElementById("profileMain")
      if (id !== null && id.id !== "icon" && !(id.id === "profileMain" && profile.classList.contains("showProfile"))) {
        if (profile !== null) {
          profile.classList.remove("showProfile")
          profile.classList.add("hiddenProfile")
        }
      }
    });
  }
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // For potential video implementation
  // playVideo(type: string) {
  //   let video = <HTMLVideoElement> document.getElementById("dsCardVid")
  //   if (type === "a") {
  //     video = <HTMLVideoElement> document.getElementById("aCardVid")
  //   }
  //   video?.play()
  // }

  // pauseVideo(type: string) {
  //   let video = <HTMLVideoElement> document.getElementById("dsCardVid")
  //   if (type === "a") {
  //     video = <HTMLVideoElement> document.getElementById("aCardVid")
  //   }
  //   video?.pause();
  //   video.currentTime = 0;
  // }
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  toggleProfile() {
    let id = document.getElementById("profileMain")

    if (id?.classList.contains("hiddenProfile")) {
      id.classList.remove("hiddenProfile")
      id.classList.add("showProfile")
    } else if (id !== null){
      id.classList.remove("showProfile")
      id.classList.add("hiddenProfile")
    }
  }
}
