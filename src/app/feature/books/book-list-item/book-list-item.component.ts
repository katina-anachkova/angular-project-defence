import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/user.service';
import { IBook } from '../../../core/interfaces/books'

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {

  isLoggedIn: boolean = this.usersServise.isLogged;

  @Input() book!: IBook;

  constructor(private usersServise: UsersService) { }

  ngOnInit() {

  }
}
