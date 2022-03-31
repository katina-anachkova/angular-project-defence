import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from './interfaces/user';
import { StorageService } from './storage.service';

export interface CreateUser {email: string, password: string}
@Injectable()
export class UsersService {

  currentUser!: IUser;

  get isLogged () {
    return !!this.currentUser
  };

  constructor(private storage: StorageService, private httpClient: HttpClient) {
  }

  login$(userData: {email:string, password: string}): Observable<any> { 
    return this.httpClient
    .post<any>(`${environment.apiUrl}/login`, userData, {withCredentials:true, observe: 'response'})
    .pipe(
      tap(response => console.log(response)),
      map(response => response.body),
      tap(user => this.currentUser = user)
      )
  }

  logout(): void {
   
  }

  register$(userData:CreateUser ): Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.apiUrl}/register`, userData, {withCredentials:true})
  }
}

