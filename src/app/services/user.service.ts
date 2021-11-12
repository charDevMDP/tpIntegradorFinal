import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://utn-lubnan-api-4.herokuapp.com/api'

  constructor(private http:HttpClient ) {}

  ngOnInit(): void {
  }

  getUserType(){
      return this.http.get(this.url+'/UserType');
  }

  getUserTypeById(id:number){
    return this.http.get(this.url+'/UserType/'+id)
  }


}
