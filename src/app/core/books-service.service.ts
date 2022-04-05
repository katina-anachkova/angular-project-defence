import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from './interfaces/books';


const url = 'https://parseapi.back4app.com/classes/Books'
const headers = {
  "X-Parse-Application-Id": "iLTzbA7OY98tKVcadzf7izWg1Y6NqDabUqJvmuDX",
  "X-Parse-REST-API-Key": "wl25tfEHnllWc7mysHNRg4Au3f3WA2x0isBOycZJ",
  "Content-Type": "application/json",
}

const requestOptions = {
  headers: new HttpHeaders(headers)
}

@Injectable()
export class BooksServiceService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get<any>(url, requestOptions);
  }

  getBookById(id: any): Observable<IBook> {
    return this.http.get<IBook>(url + `/${id}`, requestOptions);
  }

  addBook(body: { title: string, author: string, description: string, imageUrl: string }): Observable<IBook> {
    return this.http.post<IBook>(url, body, requestOptions);
  }

  deleteBook(id: any): any {
    return this.http.delete(url + `/${id}`, requestOptions)
  }

  updateBook(id: any, body: any): any {
    return this.http.put(url + `/${id}`, body, requestOptions)
  }
}
