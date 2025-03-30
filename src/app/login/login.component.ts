import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { InfobarComponent } from '../infobar/infobar.component';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { HomeService } from '../home.service';
import { LoginService } from '../login.service';

export interface UserObject {
  username: string,
  token: string,
  isPremium: boolean,
  role: string
}

@Component({
  selector: 'app-login',
  imports: [InfobarComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit, AfterViewInit, OnInit {
  pathLoginVid: string = "assets/pageLogin.mp4";
  backIcon: string = "assets/backIcon.png";

  constructor(private service: UserService, private service2: LoginService) {}


  ngOnInit(): void {
      this.service2.getLogin();
  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });


  ngAfterViewInit(): void {
      
  }

  onSubmit() {
    console.log(this.loginForm.value);
    return this.service.loginUser(this.loginForm.value).subscribe((data: any) => {
      this.service.setToken(data.token);
    });
  }
}
