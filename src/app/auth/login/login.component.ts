import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/user.service';
import { emailValidator } from '../util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg = '';

  loginFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, emailValidator]),
    'password': new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router) { }


  ngOnInit(): void {

  }

  handleLogin(): void {
    this.errorMsg = '';
    this.usersService.login$(this.loginFormGroup.value).subscribe({
      next: (user: any) => {
        console.log(user)
        this.router.navigate(['/dashboard'])
      },
      complete: () => {
        console.log('login stream completed')
      },
      error: (err: { error: { message: string; }; }) => {
        this.errorMsg = err.error.message;
      }
    });
  }
}
