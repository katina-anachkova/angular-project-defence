import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from './interfaces/books';

@Injectable()
export class BooksServiceService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>('http://localhost:3030/data/books');
  }

  getBookById(id:any): Observable<IBook> {
    return this.http.get<IBook>(`....${id}`);
  }

  getMyBooks(id:any): Observable<IBook[]> {
    return this.http.get<IBook[]>(`.... ${id}`);
  }

  addBook(body: {title: string, author: string, description: string, imageUrl: string}): Observable<IBook> {
    return this.http.post<IBook>(`apiurl/books`, body, {withCredentials: true});
  }
}
