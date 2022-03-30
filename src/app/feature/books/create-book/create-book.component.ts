import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitNewBook(newBookForm: NgForm): void {
    
  }
}
