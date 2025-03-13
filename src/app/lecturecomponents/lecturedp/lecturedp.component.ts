import { Component } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ProfilebarComponent } from '../../profilebar/profilebar.component';
import { InfobarComponent } from '../../infobar/infobar.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-lecturedp',
  imports: [NgOptimizedImage, ProfilebarComponent, InfobarComponent, MatCheckboxModule, MatButtonModule],
  templateUrl: './lecturedp.component.html',
  styleUrl: './lecturedp.component.scss'
})


export class LecturedpComponent implements OnInit, AfterViewInit {
  path: string = "/assets/T6xyzLogo.png";
  pathDS: string = "assets/pageDS.jpg";
  pathA: string = "assets/pageA.jpg";
  profilePic: string = "assets/profile.jpg";

  ngOnInit(): void {
    let tab = <HTMLElement> document.getElementById("dp1");
    tab.classList.add("selected");
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
  displayDp1() {
    let tab = <HTMLElement> document.getElementById("dp1");
    let lecture = <HTMLElement> document.getElementById("lecture1dp");
    tab.classList.add("selected");

    // removed selected elements
    let otherLectures = [<HTMLElement> document.getElementById("lecture2dp"), <HTMLElement> document.getElementById("lecture3dp"), <HTMLElement> document.getElementById("lecture4dp"),
      <HTMLElement> document.getElementById("lecture5dp"), <HTMLElement> document.getElementById("lecture6dp")]

    let otherTabs = [<HTMLElement> document.getElementById("dp2"), <HTMLElement> document.getElementById("dp3"), <HTMLElement> document.getElementById("dp4"), 
      <HTMLElement> document.getElementById("dp5"), <HTMLElement> document.getElementById("dp6")]

      for (let i = 0; i < otherTabs.length; i++) {
        otherLectures[i].style.display = "none";
        otherTabs[i].classList.remove("selected");
      }
      lecture.style.display = "table-cell"
  }
  displayDp2() {
    let tab = <HTMLElement> document.getElementById("dp2");
    let lecture = <HTMLElement> document.getElementById("lecture2dp");
    tab.classList.add("selected");

    // removed selected elements
    let otherLectures = [<HTMLElement> document.getElementById("lecture1dp"), <HTMLElement> document.getElementById("lecture3dp"), <HTMLElement> document.getElementById("lecture4dp"),
      <HTMLElement> document.getElementById("lecture5dp"), <HTMLElement> document.getElementById("lecture6dp")]

    let otherTabs = [<HTMLElement> document.getElementById("dp1"), <HTMLElement> document.getElementById("dp3"), <HTMLElement> document.getElementById("dp4"), 
      <HTMLElement> document.getElementById("dp5"), <HTMLElement> document.getElementById("dp6")]

    for (let i = 0; i < otherTabs.length; i++) {
      otherLectures[i].style.display = "none";
      otherTabs[i].classList.remove("selected");
    }
    lecture.style.display = "table-cell"
  }
  displayDp3() {
    let tab = <HTMLElement> document.getElementById("dp3");
    let lecture = <HTMLElement> document.getElementById("lecture3dp");
    tab.classList.add("selected");
    lecture.classList.remove("hideDp")
    lecture.classList.add("showDp")

    // removed selected elements
    let otherLectures = [<HTMLElement> document.getElementById("lecture1dp"), <HTMLElement> document.getElementById("lecture2dp"), <HTMLElement> document.getElementById("lecture4dp"), 
      <HTMLElement> document.getElementById("lecture5dp"), <HTMLElement> document.getElementById("lecture6dp")]

    let otherTabs = [<HTMLElement> document.getElementById("dp1"), <HTMLElement> document.getElementById("dp2"), <HTMLElement> document.getElementById("dp4"), 
      <HTMLElement> document.getElementById("dp5"), <HTMLElement> document.getElementById("dp6")]

    for (let i = 0; i < otherTabs.length; i++) {
      otherLectures[i].style.display = "none";
      otherTabs[i].classList.remove("selected");
    }
    lecture.style.display = "table-cell"
  }
  displayDp4() {
    let tab = <HTMLElement> document.getElementById("dp4");
    let lecture = <HTMLElement> document.getElementById("lecture4dp");
    tab.classList.add("selected");
    lecture.classList.remove("hideDp")
    lecture.classList.add("showDp")

    // removed selected elements
    let otherLectures = [<HTMLElement> document.getElementById("lecture1dp"), <HTMLElement> document.getElementById("lecture2dp"), <HTMLElement> document.getElementById("lecture3dp"), 
      <HTMLElement> document.getElementById("lecture5dp"), <HTMLElement> document.getElementById("lecture6dp")]

    let otherTabs = [<HTMLElement> document.getElementById("dp1"), <HTMLElement> document.getElementById("dp2"), <HTMLElement> document.getElementById("dp3"), 
      <HTMLElement> document.getElementById("dp5"), <HTMLElement> document.getElementById("dp6")]

    for (let i = 0; i < otherTabs.length; i++) {
      otherLectures[i].style.display = "none";
      otherTabs[i].classList.remove("selected");
    }
    lecture.style.display = "table-cell"
  }
  displayDp5() {
    let tab = <HTMLElement> document.getElementById("dp5");
    let lecture = <HTMLElement> document.getElementById("lecture5dp");
    tab.classList.add("selected");
    lecture.classList.remove("hideDp")
    lecture.classList.add("showDp")

    // removed selected elements
    let otherLectures = [<HTMLElement> document.getElementById("lecture1dp"), <HTMLElement> document.getElementById("lecture2dp"), <HTMLElement> document.getElementById("lecture3dp"), 
      <HTMLElement> document.getElementById("lecture4dp"), <HTMLElement> document.getElementById("lecture6dp")]

    let otherTabs = [<HTMLElement> document.getElementById("dp1"), <HTMLElement> document.getElementById("dp2"), <HTMLElement> document.getElementById("dp3"), 
      <HTMLElement> document.getElementById("dp4"), <HTMLElement> document.getElementById("dp6")]

    for (let i = 0; i < otherTabs.length; i++) {
      otherLectures[i].style.display = "none";
      otherTabs[i].classList.remove("selected");
    }
    lecture.style.display = "table-cell" 
  }
  displayDp6() {
    let tab = <HTMLElement> document.getElementById("dp6");
    let lecture = <HTMLElement> document.getElementById("lecture6dp");
    tab.classList.add("selected");
    lecture.classList.remove("hideDp")
    lecture.classList.add("showDp")

    // removed selected elements
    let otherLectures = [<HTMLElement> document.getElementById("lecture1dp"), <HTMLElement> document.getElementById("lecture2dp"), <HTMLElement> document.getElementById("lecture3dp"), 
      <HTMLElement> document.getElementById("lecture4dp"), <HTMLElement> document.getElementById("lecture5dp")]

    let otherTabs = [<HTMLElement> document.getElementById("dp1"), <HTMLElement> document.getElementById("dp2"), <HTMLElement> document.getElementById("dp3"), 
      <HTMLElement> document.getElementById("dp4"), <HTMLElement> document.getElementById("dp5")]

    for (let i = 0; i < otherTabs.length; i++) {
      otherLectures[i].style.display = "none";
      otherTabs[i].classList.remove("selected");
    }
    lecture.style.display = "table-cell"
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
