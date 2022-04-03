import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { CreateBookComponent } from './create-book/create-book.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';



const routes: Routes = [
  {
      path: 'classes/Books/create',
      component: CreateBookComponent
  },
  {
      path: 'classes/Books/edit/:id',
    //   canActivate:[AuthGuard],
      component: EditPageComponent
  },
  {
      path: 'classes/Books/:id',
      component: DetailsPageComponent
  },
]

export const BooksRoutingModule = RouterModule.forChild(routes)