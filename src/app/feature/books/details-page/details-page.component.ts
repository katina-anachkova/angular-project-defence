import { Component, OnInit } from '@angular/core';
import { BooksServiceService } from 'src/app/core/books-service.service';
import { IBook } from 'src/app/core/interfaces/books';
import { UsersService } from 'src/app/core/user.service';
import { ActivatedRoute } from '@angular/router';
import { BooksRoutingModule } from '../books-routing.module';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  
  isLoggedIn: boolean = this.usersServise.isLogged;

 book!: IBook;

  constructor(private activatedRoute: ActivatedRoute, private usersServise: UsersService, private bookService:BooksServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const bookId = params['id'];
      this.bookService.getBookById(bookId).subscribe(book => {
        this.book = book;
      })
    })
  }
  
  onDelete (bookId: string) {

      this.bookService.deleteBook(bookId)

  }

}
