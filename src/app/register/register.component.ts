import { Component } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';
import { InfobarComponent } from '../infobar/infobar.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from '../login.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface User {
  username: any,
  email: any,
  password: any,
  profileURL: any,
  isStudent: any,
  agreedTerms: any,
}

@Component({
  selector: 'app-register',
  imports: [InfobarComponent, MatCheckboxModule, ReactiveFormsModule, MatFormField, MatInputModule, RouterLink, RouterLinkActive],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent implements AfterViewInit, OnInit {
  pathLoginVid: string = "assets/pageLogin.mp4"
  backIcon: string = "assets/backIcon.png"
  profileFile: string = "TEST_URL";

  constructor(private service: UserService, private service2: LoginService) {}

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    profile: new FormControl(''),
    isStudent: new FormControl(false),
    agreeTerms: new FormControl(false, Validators.requiredTrue)
  });

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {

  }
  onSubmit() {
    // Default value change later
    this.registerForm.value.profile = this.profileFile;

    // Check if user has agreed to terms
    if (this.registerForm.get('agreeTerms')?.hasError('required')) {
      this.registerForm.controls.agreeTerms.setErrors({incorrect: "You must agree to the terms and conditions"});
      this.getErrorMessageTerms()
    }

    // Check if passwords match
    if (this.registerForm.get('password')?.value !== this.registerForm.get('confirmPassword')?.value) {
      this.registerForm.controls.confirmPassword.setErrors({incorrect: "Passwords do not match"});
      this.getErrorMessageConfirmPassword()
    }

    // Validate and register user
    if (this.registerForm.get('username')?.valid && this.registerForm.get('email')?.valid
    && this.registerForm.get('password')?.valid && this.registerForm.get('confirmPassword')?.valid && this.registerForm.get('agreeTerms')?.valid) {
      let user: User = {
        username: this.registerForm.get('username')?.value,
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value,
        profileURL: this.registerForm.get('profileURL')?.value,
        isStudent: this.registerForm.get('isStudent')?.value,
        agreedTerms: this.registerForm.get('agreedTerms')?.value,
      }
      return this.service.registerUser(user).subscribe({
        next: (next) => this.handleData(next),
        error: (error) => this.handleError(error)
      });
    } else {
      return "something went wrong!";
    }
  }

  getErrorMessageUsername() {
    if (this.registerForm.get('username')?.hasError("required")) {
      return "Username is required";
    } else if (this.registerForm.get('username')?.hasError("incorrect")) {
      return this.registerForm.get('username')?.getError('incorrect');
    } else {
      return "";
    }
  }

  getErrorMessagePassword() {
    if (this.registerForm.get('password')?.hasError("required")) {
      return "Password is required";
    } else {
      return "";
    }
  }

  getErrorMessageEmail() {
    if (this.registerForm.get('email')?.hasError("required")) {
      return "Email is required";
    } else if (this.registerForm.get('email')?.hasError("email")) {
      return "Please enter a valid email"
    } else {
      return "";
    }
  }

  getErrorMessageTerms() {
    if (this.registerForm.get('agreeTerms')?.hasError("incorrect")) {
      return this.registerForm.get('agreeTerms')?.getError("incorrect")
    } else {
      return "";
    }
  }
  getErrorMessageConfirmPassword() {
    if (this.registerForm.get('confirmPassword')?.hasError("required")) {
      return "Please confirm your password";
    } else if (this.registerForm.get('confirmPassword')?.hasError("incorrect")) {
      return this.registerForm.get('confirmPassword')?.getError("incorrect")
    } else {
      return "";
    }
  }

  handleData(data: any) {
    this.service.setToken(data.token);
    this.service2.getLoginJWT();
  }

  handleError(error: any) {
    if (error?.status == 400) {
      this.registerForm.controls.username.setErrors(null);
      this.registerForm.controls.username.setErrors({incorrect: error?.error.message});
      this.getErrorMessageUsername();
    }
  }
}