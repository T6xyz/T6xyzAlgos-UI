import { Component } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';
import { InfobarComponent } from '../infobar/infobar.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-register',
  imports: [InfobarComponent, MatCheckboxModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements AfterViewInit, OnInit {
  pathLoginVid: string = "assets/pageLogin.mp4"
  backIcon: string = "assets/backIcon.png"

  ngOnInit(): void {
      
  }
  ngAfterViewInit(): void {
      
  }
}
