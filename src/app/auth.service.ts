import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, BehaviorSubject, catchError, EMPTY } from 'rxjs';
import { IUser } from './core/interfaces/user';
import { CreateUserDto } from './core/user.service';

const url = 'https://parseapi.back4app.com/users'

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _currentUser = new BehaviorSubject<IUser>(undefined!);

    sessionStorage = sessionStorage;
    isLoggedIn$ = (sessionStorage.length > 0) ? true : false

    constructor(private httpClient: HttpClient) {
    }

    login$(userData: { email: string, password: string }): Observable<any> {
        return this.httpClient
            .post<any>(url + '/login', userData, { withCredentials: true, observe: 'response' })
            .pipe(
                map(response => response.body),
            )
    }

    logout$():void {
        sessionStorage.clear();
    }

    register$(userData: CreateUserDto): Observable<IUser> {
        return this.httpClient.post<IUser>(url + `/register`, userData, { withCredentials: true })
    }

    handleLogin(newUser: IUser) {
        this._currentUser.next(newUser);
    }

    handleLogout() {
        this._currentUser.next(undefined!);
    }
}
