import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBookComponent } from './create-book/create-book.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { BooksRoutingModule } from './books-routing.module';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { BookListComponent } from '../book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { MybooksComponent } from './mybooks/mybooks.component';

@NgModule({
  declarations: [
    CreateBookComponent,
    DetailsPageComponent,
    EditPageComponent,
    BookListItemComponent,
    BookListComponent,
    MybooksComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule
  ],
  exports: [
    BookListComponent,
    DetailsPageComponent
  ]
})
export class BooksModule { }
