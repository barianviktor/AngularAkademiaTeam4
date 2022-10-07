import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLogedIn: boolean = true;
  email: string = 'email@email.com';
  password: string = 'password';

  constructor() {}

  getIsLogedIn() {
    return this.isLogedIn;
  }

  checkLoginData(email: string, password: string): boolean {
    this.isLogedIn = this.email === email && this.password === password;
    return this.email === email && this.password === password;
  }
  logout() {
    this.isLogedIn = false;
  }
}
