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
  pathPage: string = "assets/homepage3.mp4";

  ngOnInit(): void {
      
  }

  ngAfterViewInit(): void {
      
  }
}
