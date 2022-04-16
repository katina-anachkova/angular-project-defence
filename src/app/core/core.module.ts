import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersService } from './user.service';
import { BooksServiceService } from './books-service.service';

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
        BooksServiceService,
      ]
    }
  }
}
