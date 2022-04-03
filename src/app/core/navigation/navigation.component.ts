import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistersService } from 'src/app/auth/register/register.service';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  currentUser$:Observable<IUser> = this.service.currentUser$;
  // isLoggedIn$: Observable<boolean> = this.service.isLoggedIn$;
  isLoggedIn$: boolean = (sessionStorage.length > 0) ? true : false;

  constructor(public service: RegistersService, private router: Router) { }

  
  logoutHandler(): void {
    this.service.logout();
    this.router.navigate(['/login']);
  }

}
