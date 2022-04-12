import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistersService } from '../register/register.service';
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
    private service: RegistersService,
    private router: Router) { }


  ngOnInit(): void { }

  handleLogin(): void {
    this.errorMsg = '';

    const { email, password, ...rest } = this.loginFormGroup.value;

    const body: { [key: string]: string } = {
      email: email,
      password: password,
    }

    let params = `?email=${body['email']}&password=${body['password']}`

    this.service.login(params).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      complete: () => {
        sessionStorage.setItem('user', body['email'].toString());
      },
      error: (err: { error: { message: string; }; }) => {
        this.errorMsg = err.error.message;
      }
    });
  }
}
