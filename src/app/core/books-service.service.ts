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
    return this.http.get<IBook>(`http://localhost:3030/data/books/${id}`);
  }

  // getMyBooks(ownerId:any): Observable<IBook[]> {
  //   return this.http.get<IBook[]>(`http://localhost:3030/data/books/${ownerId}`);
  // }

  addBook(body: {title: string, author: string, description: string, imageUrl: string}): Observable<IBook> {
    return this.http.post<IBook>(`http://localhost:3030/data/books`, body, {withCredentials: false});
  }

  deleteBook(id:any): any {
    return this.http.delete(`http://localhost:3030/data/books/${id}`)
  }
}
