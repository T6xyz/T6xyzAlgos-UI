import { Component, signal } from '@angular/core';
import { OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { InfobarComponent } from '../infobar/infobar.component';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { HomeService } from '../home.service';
import { LoginService } from '../login.service';
import { NgIf } from '@angular/common';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface UserObject {
  username: string,
  token: string,
  isPremium: boolean,
  role: string
}

@Component({
  selector: 'app-login',
  imports: [InfobarComponent, ReactiveFormsModule, NgIf, MatFormField, FormsModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit, AfterViewInit, OnInit {
  pathLoginVid: string = "assets/pageLogin.mp4";
  backIcon: string = "assets/backIcon.png";
  errorMessage = "";

  constructor(private service: UserService, private service2: LoginService) {}


  ngOnInit(): void {
      this.service2.getLogin();
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });


  ngAfterViewInit(): void {
      
  }

  onSubmit() {
    if (!this.loginForm.get('username')?.hasError("required") && !this.loginForm.get('password')?.hasError("required")) {
      return this.service.loginUser(this.loginForm.value).subscribe((data: any) => {
        this.service.setToken(data.token);
        this.service2.getLogin();

      }, (error) => {
        if (error?.status == 400) {
          this.loginForm.controls.username.setErrors(null);
          this.loginForm.controls.password.setErrors({incorrect: error?.error.message});
          this.getErrorMessageUsername();
        }
        if (error?.status == 404) {
          this.loginForm.controls.password.setErrors(null);
          this.loginForm.controls.username.setErrors({incorrect: error?.error.message});
          this.getErrorMessagePassword();
        }
      });
    } else {
      return "Something went wrong!";
    }
  }

  getErrorMessageUsername() {
    if (this.loginForm.get('username')?.hasError("required")) {
      return "Username is required";

    } else if (this.loginForm.get('username')?.hasError("incorrect")) {
      return this.loginForm.get('username')?.getError("incorrect");

    } else {
      return "";
    }
  }
  getErrorMessagePassword() {
    if (this.loginForm.get('password')?.hasError("required")) {
      return "Password is required";

    } else if (this.loginForm.get('password')?.hasError("incorrect")) {
      return this.loginForm.get('password')?.getError("incorrect");

    } else {
      return "";
    }
  }
}
