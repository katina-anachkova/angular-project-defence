import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/core/interfaces/books';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksServiceService } from 'src/app/core/books-service.service';
import { UsersService } from 'src/app/core/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

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

  saveBook(submitBookForm: NgForm): void{
    const id = this.book._id;
    const body = submitBookForm.value;
    this.bookService.updateBook(id, body).subscribe({
      next: (book: any) => {
        console.log(book)
        this.router.navigate(['/dashboard'])
      },
      error: (error: any) => {
        console.error(error)
      }
    })

  }

}
