
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { AuthGuard } from '../core/guards/auth.guard';


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
      path: 'my-books',
      canActivate: [AuthGuard],
      component: MyBooksComponent
  }
]
export const AuthRoutingModule = RouterModule.forChild(routes)