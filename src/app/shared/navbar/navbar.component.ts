import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user:User = null;

  constructor(private _authService: AuthService,private _userService: UserService) {

    if(_authService.getIsLogged()){
        this.user = _authService.getUser();
    }
  }

  ngOnInit(): void {
    this._userService.getUserType().subscribe(response => {
      console.log(response)
    })
  }

  logout(){
    this._authService.logout();
  }

  isLogged(){

    let islogged = this._authService.getIsLogged()
    if(islogged){
      this.user = this._authService.getUser();
    }
    return islogged
  }

}
