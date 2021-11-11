import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://utn-lubnan-api-4.herokuapp.com/api';
  private token: any = null;
  redirectUrl: string = '';
  private isLogged: boolean = false;
  private user: any = null;

  constructor(private http: HttpClient, private router: Router) { }

  login(user:User): Observable<any>{

    // configuracion para para peticion
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const obs = this.http.post(this.url+'/User/Login', user, httpOptions);

    obs.subscribe((response:any) => {
      console.log(response)
      this.token = response['token'];
      this.user = response['userDetails']
      console.log(this.user);
      localStorage.setItem('token', this.token);
     
      this.isLogged = true;
      this.router.navigate([''])
    }, error => { console.log('ERROR EN LOGIN')})

      return obs;
  }

  getToken(){
    return this.token
  }

  getIsLogged(){
    return this.isLogged
  }
  
  getUser(){
    return this.user
  }
  
  logout(): void {
    sessionStorage.removeItem('token');
    this.token = undefined;
    this.isLogged = false
    this.router.navigate([''])
  }

}