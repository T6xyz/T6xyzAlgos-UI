import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Change URL in production!!!!!!!
  private URL = "http://localhost:8080/login";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


  loginUser(info: any) {
    return this.http.post(this.URL, JSON.stringify(info), this.httpOptions);
  }
}
