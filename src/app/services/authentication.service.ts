import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLogedIn: boolean = false;
  username: string = 'username';
  password: string = 'password';

  constructor() {}

  getIsLogedIn() {
    return this.isLogedIn;
  }

  checkLoginData(username: string, password: string): boolean {
    this.isLogedIn = this.username === username && this.password === password;
    return this.username === username && this.password === password;
  }
  logout() {
    this.isLogedIn = false;
  }
}
