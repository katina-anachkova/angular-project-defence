import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { CreateUserDto } from 'src/app/core/user.service';
import { emailValidator, passwordMatch } from '../util';
import { RegistersService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  erorrMsg = '';
  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(5)]);

  registerFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, emailValidator]),
    "username": new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'password': this.passwordControl,
    'repass': new FormControl(null, [passwordMatch(this.passwordControl), Validators.minLength(1)])

  })

  errorMsg = '';
  
  constructor(private formBuilder: FormBuilder, private service: RegistersService, private router: Router) { }

  ngOnInit(): void {
  }

  handleRegister(): void {
    this.errorMsg = '';


    const { email, password, username, repass } = this.registerFormGroup.value;

    const body: any = {
      email: email,
      password: password,
      username: username,
      repass: repass
    }

    this.service.register(body).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      complete: () => {
        sessionStorage.setItem('user', body['email'].toString())
      },
      error: (err: { error: { message: string; }; }) => {
        this.errorMsg = err.error.message;
      }
    });
  }
}
