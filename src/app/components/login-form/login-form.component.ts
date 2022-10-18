import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ILoginForm } from 'src/app/utils/forms-interfaces/loginForm.interface';
import { LoginForm } from 'src/app/utils/forms/LoginForm';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @Input() form?: FormGroup<ILoginForm>;
  @Output() formSubmited = new EventEmitter<void>();
  ngOnInit(): void {}

  get username(): FormControl {
    return this.form?.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form?.get('password') as FormControl;
  }

  onSubmit(): void {
    this.formSubmited.emit();
  }
}
