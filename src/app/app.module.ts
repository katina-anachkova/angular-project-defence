import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './feature/pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './feature/pages/page-not-found/page-not-found.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { FooterComponent } from './core/footer/footer.component';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './feature/books/books.module';
import { BooksServiceService } from './core/books-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    CoreModule.forRoot(),
    AppRoutingModule,
    CoreModule,
    AuthModule,
    BooksModule,
    BrowserAnimationsModule,
  ],
  providers: [BooksServiceService],
  bootstrap: [AppComponent, NavigationComponent, FooterComponent]
})
export class AppModule { }
