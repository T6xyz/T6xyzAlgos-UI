import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { InfobarComponent } from '../infobar/infobar.component';

@Component({
  selector: 'app-login',
  imports: [InfobarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, AfterViewInit {
  pathLoginVid: string = "assets/pageLogin.mp4"
  backIcon: string = "assets/backIcon.png"

  ngOnInit(): void {
      
  }

  ngAfterViewInit(): void {
      
  }
}
