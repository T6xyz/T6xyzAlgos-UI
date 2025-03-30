import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DatastructuresService {
      // Change URL in production!!!!!!!
      private LOGIN_URL = "http://localhost:8080/ds";

      constructor(private http: HttpClient, private router: Router) { }
    
      httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + window.localStorage.getItem("authToken")})
      };
    
      getDS() {
        return this.http.get(this.LOGIN_URL, this.httpOptions).subscribe((data: any) => {
          if (data === "OK") {
            this.router.navigate(['ds']);
          }
        }, (error) => this.router.navigate(['login']));
      }
}