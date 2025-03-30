import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Change URL in production!!!!!!!
  private LOGIN_URL = "http://localhost:8080/login";
  private REGISTER_URL = "http://localhost:8080/register";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


  loginUser(info: any) {
    return this.http.post(this.LOGIN_URL, JSON.stringify(info), this.httpOptions);
  }

  registerUser(info: any) {
    return this.http.post(this.REGISTER_URL, JSON.stringify(info), this.httpOptions);
  }

  getToken() {
    return window.localStorage.getItem("authToken");
  }

  setToken(token: string) {
    if (token !== null) {
      window.localStorage.setItem("authToken", token);
    } else {
      window.localStorage.removeItem("authToken");
    }
  }
}