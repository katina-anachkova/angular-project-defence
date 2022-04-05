
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { CreateBookComponent } from '../feature/books/create-book/create-book.component';


const routes: Routes = [
  {
      path: 'register',
      component: RegisterComponent
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
    path: 'create',
    canActivate: [AuthGuard],
    component: CreateBookComponent,
  }
]
export const AuthRoutingModule = RouterModule.forChild(routes)