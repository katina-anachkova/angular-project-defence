import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { DashboardComponent } from './feature/pages/dashboard/dashboard.component';
import { DetailsPageComponent } from './feature/books/details-page/details-page.component'; 
import { EditPageComponent } from './feature/books/edit-page/edit-page.component';
import { CreateBookComponent } from './feature/books/create-book/create-book.component'; 
import { FooterComponent } from './core/footer/footer.component';
import { PageNotFoundComponent } from './feature/pages/page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MyBooksComponent } from './auth/my-books/my-books.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    DetailsPageComponent,
    EditPageComponent,
    CreateBookComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    MyBooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
