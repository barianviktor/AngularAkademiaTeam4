import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILoginForm } from '../forms-interfaces/loginForm.interface';

export class LoginForm extends FormGroup<ILoginForm> {
  constructor() {
    super({
      username: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }
}
