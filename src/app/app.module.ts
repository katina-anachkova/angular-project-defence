import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { MatSliderModule} from '@angular/material/slider';

import { AppComponent } from './app.component';
import { DashboardComponent } from './feature/pages/dashboard/dashboard.component';
import { DetailsPageComponent } from './feature/books/details-page/details-page.component'; 
import { EditPageComponent } from './feature/books/edit-page/edit-page.component';
import { CreateBookComponent } from './feature/books/create-book/create-book.component'; 
import { PageNotFoundComponent } from './feature/pages/page-not-found/page-not-found.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { FooterComponent } from './core/footer/footer.component';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailsPageComponent,
    EditPageComponent,
    CreateBookComponent,
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
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent,NavigationComponent, FooterComponent]
})
export class AppModule { }
