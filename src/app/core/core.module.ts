import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersService } from './user.service';
import { storageServiceProvider } from './storage.service';
import { BooksServiceService } from './books-service.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
  ],
  exports: [
    NavigationComponent,
    FooterComponent
  ],
  providers: []
})

export class CoreModule { 
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        UsersService,
        storageServiceProvider,
        BooksServiceService,
        {
          provide: HTTP_INTERCEPTORS,
          multi: true,
          useClass: AuthInterceptor
        }
      ]
    }
  }
}
