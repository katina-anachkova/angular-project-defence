import { Component } from '@angular/core';
import { UsersService } from '../user.service'; 

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  get isLogged(): boolean {
    return this.usersService.isLogged
  }

  constructor(public usersService: UsersService) { }

  
  logoutHandler(): void {
    this.usersService.logout()
     
  }

}
