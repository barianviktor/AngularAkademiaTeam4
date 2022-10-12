import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isLogedIn: boolean = false;
  private username: string = '';
  private password: string = '';

  constructor() {}

  getIsLogedIn() {
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

  setUserIsLogedInLocalStorage(setTo: boolean) {
    localStorage.setItem('userIsLogedIn', JSON.stringify(setTo));
  }
  logout() {
    localStorage.clear();
    this.isLogedIn = false;
  }
}
