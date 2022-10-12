import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoginForm } from 'src/app/utils/forms/LoginForm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: LoginForm = new LoginForm();
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  get username(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
  handleSubmit() {
    if (
      this.authService.checkLoginData(this.username.value, this.password.value)
    ) {
      this.router.navigate(['']);
    } else {
      this.loginForm.setErrors({
        invalidLogin: true,
      });
    }
  }
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

  

  
  onSubmit(): void {
    i
    } */
  ngOnInit(): void {}
}
