import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { IUser } from 'src/app/core/interfaces/user';

const BASE_URL = 'https://parseapi.back4app.com'
const headers = {
  "X-Parse-Application-Id": "iLTzbA7OY98tKVcadzf7izWg1Y6NqDabUqJvmuDX",
  "X-Parse-REST-API-Key": "wl25tfEHnllWc7mysHNRg4Au3f3WA2x0isBOycZJ",
  "Content-Type": "application/json",
  'X-Parse-Revocable-Session': '1'
}

@Injectable({
  providedIn: 'root'
})
export class RegistersService {
  private _currentUser = new BehaviorSubject<IUser>(undefined!);

  currentUser$ = this._currentUser.asObservable();
  isLoggedIn$ = this.currentUser$.pipe(map(user => !!user));

  constructor(private http: HttpClient, private router: Router) { }

  register(userData: any) {
    return this.http.post<any>(BASE_URL + "/users", userData, { headers })

  }

  login(params: any) {
    return this.http.get<any>(BASE_URL + "/login" + params, { headers })
  }

  logout() {
    sessionStorage.removeItem('user')
    this.router.navigate(['/dashboard']);
  }
}