import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DplecturesService {
      // Change URL in production!!!!!!!
      private LOGIN_URL = "http://localhost:8080/dp";

      constructor(private http: HttpClient, private router: Router) { }
    
      httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + window.localStorage.getItem("authToken")})
      };
    
      getLectures() {
        return this.http.get(this.LOGIN_URL, this.httpOptions).subscribe({
          next: (next) => this.getData(next),
          error: (error) => this.getError(error)
        });
      }
      getData(data: any) {
        if (data === "OK") {
          this.router.navigate(['dp']);
        }
      }
      getError(error: any) {
        this.router.navigate(['login']);
      }
}
