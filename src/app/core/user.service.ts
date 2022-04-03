import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map} from 'rxjs/operators';
import { IUser } from './interfaces/user';
import { StorageService } from './storage.service';

export interface CreateUserDto {email: string, password: string }
@Injectable()
export class UsersService {

  currentUser!: IUser;

  get isLogged () {
    return !!this.currentUser
  };

  constructor(private storage: StorageService, private httpClient: HttpClient) {
  }

}

