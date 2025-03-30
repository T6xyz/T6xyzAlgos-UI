import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ProfilebarComponent } from '../profilebar/profilebar.component';
import { InfobarComponent } from '../infobar/infobar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { AlgorithmsService } from '../algorithms.service';

@Component({
  selector: 'app-algorithmspage',
  imports: [ProfilebarComponent, InfobarComponent, RouterLink, RouterOutlet, MatCardModule],
  templateUrl: './algorithmspage.component.html',
  styleUrl: './algorithmspage.component.scss'
})
export class AlgorithmspageComponent implements AfterViewInit {
  path: string = "/assets/T6xyzLogo.png";
  profilePic: string = "assets/profile.jpg";

  constructor(private service: AlgorithmsService) {}

  ngOnInit(): void {
    this.service.getAlgos();
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
