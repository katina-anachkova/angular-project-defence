import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { RegistersService } from 'src/app/auth/register/register.service';
import { IUser } from '../interfaces/user';
import { MessageBusService, MessageType } from '../message-bus.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  sessionStorage = sessionStorage;
  message!: string;
  isMessageError!: boolean;

  private isLoggingOut: boolean = false;

  private subscription!: Subscription;

  constructor(public authService: AuthService, private router: Router, private messageBus: MessageBusService) {
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  logoutHandler(): void {
    if (this.isLoggingOut) {
      return;
    }

    this.isLoggingOut = true;
    console.log('logout called');

    this.authService.logout$().subscribe({
      next: args => {
        console.log(args);
      },
      complete: () => {
        this.isLoggingOut = false;
        sessionStorage.clear();
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.isLoggingOut = false;
      }
    });
  }
}
