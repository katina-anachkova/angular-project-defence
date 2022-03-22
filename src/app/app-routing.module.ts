import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditPageComponent } from './edit-page/edit-page.component';

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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
