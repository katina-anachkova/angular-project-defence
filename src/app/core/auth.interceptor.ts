import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { IUser } from './interfaces/user';
import { RegistersService } from '../auth/register/register.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private service: RegistersService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(tap((event: any) => {
      if (event instanceof HttpResponse) {
        if(event.url?.endsWith('login') || event.url?.endsWith('register')){
          console.log(`login or register happened`)
          //todo save user
          const newlyLoggedUser: IUser = event.body;
          // this.service.handleLogin(newlyLoggedUser)
        }
      }
    }))
  }
}
