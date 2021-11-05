import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://utn-lubnan-api-4.herokuapp.com/api'

  constructor(private http:HttpClient) {}

  login(user:User): Observable<any>{
    return this.http.post(this.url+'/User/Login',user)
  }

}
