import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginFormGroup: FormGroup = this.formBuilder.group({
  'username': new FormControl('', [Validators.required]),
  'password': new FormControl('', [Validators.required, Validators.minLength(6)])
});

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {

  }

  loginHandler(): void {
    //to do
    // console.log('logged in')
    // this.usersService.login();
    // this.router.navigate(['/dashboard'])
    console.log('form is submitted')

  }
  handleLogin():void {
    console.log('form must be submitted')
  }


}
