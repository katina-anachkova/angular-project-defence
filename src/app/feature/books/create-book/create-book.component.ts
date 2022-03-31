import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksServiceService } from 'src/app/core/books-service.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  constructor(private router: Router, private bookService: BooksServiceService) { }

  ngOnInit(): void {
  }

  submitNewBook(newBookForm: NgForm): void {
    this.bookService.addBook(newBookForm.value).subscribe({
      next: (book) => {
        console.log(book)
        this.router.navigate(['/dashboard'])
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  navigateToHome() {
  }
}
