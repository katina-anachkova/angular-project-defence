import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from './interfaces/books';

@Injectable()
export class BooksServiceService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(`...`);
  }

  getBookById(id:any): Observable<IBook> {
    return this.http.get<IBook>(`....${id}`);
  }

  getMyBooks(id:any): Observable<IBook[]> {
    return this.http.get<IBook[]>(`.... ${id}`);
  }
}
