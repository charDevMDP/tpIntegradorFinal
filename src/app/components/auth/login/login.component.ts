import { AuthService } from '../../../auth/auth.service';
import { User } from '../../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;


  constructor(private fb: FormBuilder, private _authService: AuthService, private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    }
    );
  }

  onSubmit(){

    let userCredentials = new User();

    userCredentials.email = this.loginForm.get('email')?.value;
    userCredentials.password = this.loginForm.get('password')?.value;

    this._authService.login(userCredentials).subscribe(response => {
      
      if(response.token){
        this.router.navigate(['products']);
      }
      
    });
  }

}
