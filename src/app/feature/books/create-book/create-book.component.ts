import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksServiceService } from 'src/app/core/books-service.service';
import { IBook } from 'src/app/core/interfaces/books';
import { IUser } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  userBooks!: IBook[];

  constructor(private router: Router, private bookService: BooksServiceService) { }

  ngOnInit(): void { }

  userEmail: any = sessionStorage['user'];

  submitNewBook(newBookForm: NgForm): void {
    let formData = newBookForm.value;
    formData['userEmail'] = this.userEmail;
    
    this.bookService.addBook(formData).subscribe({
      next: () => {
        this.router.navigate(['/dashboard'])
      },
      error: (error) => {
        console.error(error)
      }
    });
  }
}
