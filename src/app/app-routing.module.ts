import { Router, RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './feature/books/create-book/create-book.component';
import { DashboardComponent } from './feature/pages/dashboard/dashboard.component';
import { EditPageComponent } from './feature/books/edit-page/edit-page.component';

const routes: Routes = [
  {
  path: '',
  pathMatch: 'full',
  redirectTo: 'dashboard',
},
{
  path: 'dashboard',
  component: DashboardComponent,
},
{
  path: 'edit/:id',
  component: EditPageComponent
},
{
  path: 'create',
  component: CreateBookComponent
}
];

export const AppRoutingModule = RouterModule.forRoot(routes);
