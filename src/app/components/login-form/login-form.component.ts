
import { User } from './../../models/user';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm?:FormGroup;
  loading:boolean = false

  constructor(private fb: FormBuilder, private _authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
    }
    );
  }

  onSubmit(){

    let userCredentials = new User();

    userCredentials.email = this.loginForm?.get('email')?.value;
    userCredentials.password = this.loginForm?.get('password')?.value;

    this.loading = true
    this._authService.login(userCredentials).subscribe(algo => {
      this.loading = false
    });
  }

}
