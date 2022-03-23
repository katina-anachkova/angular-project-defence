import { Injectable } from '@angular/core';
import {  CanActivate, Router, UrlTree } from '@angular/router';
import { UsersService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UsersService, private router:Router ){}
  canActivate(): boolean | UrlTree {
    if (this.userService.isLogged){
      return true;
    }

    return this.router.createUrlTree(['/login'])

  }
  
}
