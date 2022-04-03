import { Component, OnInit } from '@angular/core';
import { BooksServiceService } from 'src/app/core/books-service.service';
import { IBook } from 'src/app/core/interfaces/books';
import { UsersService } from 'src/app/core/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  isLoggedIn: boolean = this.usersServise.isLogged;

  book!: IBook;

  constructor(private activatedRoute: ActivatedRoute, private usersServise: UsersService, private bookService: BooksServiceService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const bookId = params['id'];
      this.bookService.getBookById(bookId).subscribe(book => {
        this.book = book;
      })
    })
  }

  onDelete($event: any, bookId: string) {
    $event.preventDefault();
    this.bookService.deleteBook(bookId).subscribe((response: any) => { console.log(response); })
    this.navigateToHome()
  }

  onEdit(bookId: string) {
    this.router.navigate([`/edit/${bookId}`])
  }

  navigateToHome() {
    this.router.navigate(['/dashboard']);
  }
}


