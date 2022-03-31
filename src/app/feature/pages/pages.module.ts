import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from '../book-list/book-list.component';



@NgModule({
  declarations: [
    BookListComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookListComponent
  ]
})
export class PagesModule { }
