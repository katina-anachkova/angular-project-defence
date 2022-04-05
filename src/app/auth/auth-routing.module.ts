
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
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
]
export const AuthRoutingModule = RouterModule.forChild(routes)