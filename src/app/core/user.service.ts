import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './interfaces/user';

export interface CreateUserDto {email: string, password: string }
@Injectable()
export class UsersService {

  currentUser!: IUser;

  get isLogged () {
    return !!this.currentUser
  };

  constructor(private httpClient: HttpClient) {
  }

}

