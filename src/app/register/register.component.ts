import { Component } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';
import { InfobarComponent } from '../infobar/infobar.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  imports: [InfobarComponent, MatCheckboxModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements AfterViewInit, OnInit {
  pathLoginVid: string = "assets/pageLogin.mp4"
  backIcon: string = "assets/backIcon.png"
  profileFile: string = "TEST_URL";

  constructor(private service: UserService) {}

  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    profile: new FormControl(''),
    isStudent: new FormControl(false),
    agreeTerms: new FormControl(false)
  });

  ngOnInit(): void {
      console.log(window.localStorage.getItem("authToken"));
  }
  ngAfterViewInit(): void {
      
  }
  onSubmit() {
    this.registerForm.value.profile = this.profileFile;
    console.log(JSON.stringify(this.registerForm.value));

    return this.service.registerUser(this.registerForm.value).subscribe(data => console.log(JSON.stringify(data)));
  }
}
