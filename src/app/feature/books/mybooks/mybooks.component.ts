import { Component, OnInit } from '@angular/core';
import { BooksServiceService } from 'src/app/core/books-service.service';
import { IBook } from 'src/app/core/interfaces/books';
import { IUser } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.css']
})
export class MybooksComponent implements OnInit {
  userBooks!: IBook[];
  user!: IUser;

  //get user?
  
  constructor(private bookService: BooksServiceService) { }
  // this.user = localStorage.getItem(['userData'])
  
  ngOnInit(): void {
    // this.bookService.getBooks().subscribe(books => {
    //   this.userBooks = books.filter(book => book.ownerId = userId);
    // });
  }

}
