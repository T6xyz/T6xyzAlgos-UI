import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // Change URL in production!!!!!!!
  private LOGIN_URL = "http://localhost:8080/home";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + window.localStorage.getItem("authToken")})
  };

  constructor(private http: HttpClient, private router: Router) { }

  getLoginJWT() {
    if (window.localStorage.getItem("authToken") != null) {
      this.httpOptions.headers = this.httpOptions.headers.set("Authorization", 'Bearer ' + window.localStorage.getItem("authToken"));
    }

    return this.http.get(this.LOGIN_URL, this.httpOptions).subscribe({
      next: (data) => this.handleData(data),
      error: (error) => this.handleError(error)
    });
  }
  handleData(data: any) {
    if (data === "OK") {
      this.router.navigate(['home']);
    }
  }
  handleError(error: any) {
    this.router.navigate(['login']);
  }
}
