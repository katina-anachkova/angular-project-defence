import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/core/interfaces/books';
import { BooksServiceService } from 'src/app/core/books-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList!: any;

  constructor(private bookServise: BooksServiceService) { }

  ngOnInit(): void {
    this.bookServise.getBooks().subscribe(books => {
      this.bookList = Object.values(books)[0]
    });
  }

}
