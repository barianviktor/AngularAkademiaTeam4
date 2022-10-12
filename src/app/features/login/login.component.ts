import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  /* loginForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.loginForm = fb.group({
      username: ['', [Validators.required,]],
      password: ['', [Validators.required]],
    });
    console.log();
  }

  
  get username(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }
  
  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
  
  onSubmit(): void {
    if (
      this.authService.checkLoginData(this.username.value, this.password.value)
      ) {
        this.router.navigate(['']);
      } else {
        this.loginForm.setErrors({
          invalidLogin: true,
        });
      }
    } */
  ngOnInit(): void {}
}
