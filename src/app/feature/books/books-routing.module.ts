import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { CreateBookComponent } from './create-book/create-book.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';



const routes: Routes = [
  {
      path: ':id/edit',
      canActivate:[AuthGuard],
      component: EditPageComponent
  },
  {
      path: 'books/:id',
      component: DetailsPageComponent
  },
]

export const BooksRoutingModule = RouterModule.forChild(routes)