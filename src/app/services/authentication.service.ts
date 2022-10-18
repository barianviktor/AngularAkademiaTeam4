import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isLogedIn: boolean = false;
  private username: string = 'username';
  private password: string = 'password';

  constructor() {}

  getIsLogedIn(): boolean {
    if (localStorage.getItem('userIsLogedIn')) {
      this.isLogedIn = true;
    } else {
      this.isLogedIn = false;
    }
    return this.isLogedIn;
  }

  checkLoginData(username: string, password: string): boolean {
    console.log(localStorage.getItem('user'));
    if (this.username == username && this.password == password) {
      localStorage.setItem('userIsLogedIn', JSON.stringify(true));
      this.isLogedIn = true;
      return true;
    } else {
      this.isLogedIn = false;
      return false;
    }
  }

  setUserIsLogedInLocalStorage(setTo: boolean): void {
    localStorage.setItem('userIsLogedIn', JSON.stringify(setTo));
  }
  logout(): void {
    localStorage.clear();
    this.isLogedIn = false;
  }
}
