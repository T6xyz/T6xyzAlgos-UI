import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { InfobarComponent } from '../infobar/infobar.component';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  imports: [InfobarComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, AfterViewInit {
  pathLoginVid: string = "assets/pageLogin.mp4"
  backIcon: string = "assets/backIcon.png"

  constructor(private service: UserService) {}

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
      
  }

  ngAfterViewInit(): void {
      
  }

  onSubmit() {
    console.log(this.loginForm.value);
    return this.service.loginUser(this.loginForm.value).subscribe(data => console.log(JSON.stringify(data)));
  }
}
