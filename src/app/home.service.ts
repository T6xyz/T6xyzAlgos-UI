import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  // Change URL in production!!!!!!!
  private HOME_URL = "http://localhost:8080/home";

  constructor(private http: HttpClient, private router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + window.localStorage.getItem("authToken")})
  };

  getHome() {
    if (window.localStorage.getItem("authToken") != null) {
      this.httpOptions.headers = this.httpOptions.headers.set("Authorization", 'Bearer ' + window.localStorage.getItem("authToken"));
    }
    
    return this.http.get(this.HOME_URL, this.httpOptions).subscribe((data: any) => {
      if (data === "OK") {
        this.router.navigate(['home']);
      }
    }, (error) => this.router.navigate(['login']));
  }
}
