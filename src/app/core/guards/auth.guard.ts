import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    console.log(route, state);
    if(this.authService.isLoggedIn$) {
      
         return true;

      }

      return this.router.createUrlTree(['/login'], {
        queryParams: {
          'redirect-to': '/' + route.url.map(f => f.path).join('/')
        }
      });
    
  }

}