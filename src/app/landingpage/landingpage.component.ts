import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  imports: [],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent implements AfterViewInit{
  path: string = "/assets/T6xyzLogo.png";

  ngAfterViewInit(): void {

      document.getElementById("ds0")?.addEventListener("mouseleave", function() {
        console.log("Out Worked!")
        document.getElementById("ds0")?.classList.remove("show0")
        document.getElementById("ds1")?.classList.remove("show1")
        document.getElementById("a0")?.classList.remove("show0")
        document.getElementById("a1")?.classList.remove("show1")
        document.getElementById("dsid")?.classList.remove("showBar")
        document.getElementById("aid")?.classList.remove("showBar")
      });

      document.getElementById("ds1")?.addEventListener("mouseleave", function() {
        console.log("Out Worked!")
        document.getElementById("ds0")?.classList.remove("show0")
        document.getElementById("ds1")?.classList.remove("show1")
        document.getElementById("a0")?.classList.remove("show0")
        document.getElementById("a1")?.classList.remove("show1")
        document.getElementById("dsid")?.classList.remove("showBar")
        document.getElementById("aid")?.classList.remove("showBar")
      });

      document.getElementById("dsid")?.addEventListener("mouseenter", function() {
        console.log("Hover Worked!")
        document.getElementById("ds0")?.classList.add("show0")
        document.getElementById("ds1")?.classList.add("show1")
        document.getElementById("a0")?.classList.remove("show0")
        document.getElementById("a1")?.classList.remove("show1")
        document.getElementById("dsid")?.classList.add("showBar")
        document.getElementById("aid")?.classList.remove("showBar")
      });

      document.getElementById("a0")?.addEventListener("mouseleave", function() {
        console.log("Out Worked!")
        document.getElementById("a0")?.classList.remove("show0")
        document.getElementById("a1")?.classList.remove("show1")
        document.getElementById("ds0")?.classList.remove("show0")
        document.getElementById("ds1")?.classList.remove("show1")
        document.getElementById("aid")?.classList.remove("showBar")
        document.getElementById("dsid")?.classList.remove("showBar")
      });

      document.getElementById("a1")?.addEventListener("mouseleave", function() {
        console.log("Out Worked!")
        document.getElementById("a0")?.classList.remove("show0")
        document.getElementById("a1")?.classList.remove("show1")
        document.getElementById("ds0")?.classList.remove("show0")
        document.getElementById("ds1")?.classList.remove("show1")
        document.getElementById("aid")?.classList.remove("showBar")
        document.getElementById("dsid")?.classList.remove("showBar")
      });

      document.getElementById("aid")?.addEventListener("mouseenter", function() {
        console.log("Hover Worked!")
        document.getElementById("a0")?.classList.add("show0")
        document.getElementById("a1")?.classList.add("show1")
        document.getElementById("ds0")?.classList.remove("show0")
        document.getElementById("ds1")?.classList.remove("show1")
        document.getElementById("aid")?.classList.add("showBar")
        document.getElementById("dsid")?.classList.remove("showBar")
      });
  }
}
