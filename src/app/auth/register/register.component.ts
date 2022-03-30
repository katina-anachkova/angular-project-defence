import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUser, UsersService } from 'src/app/core/user.service';
import { emailValidator, passwordMatch } from '../util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(6)]); //to fix min length

  // errorMsg = "";

  // get passwordsGroup(): FormGroup {
  //   return this.registerFormGroup.controls['passwords'] as FormGroup
  //   }

  registerFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, emailValidator]),
    'password': this.passwordControl,
    'repass': new FormControl(null, [passwordMatch(this.passwordControl), Validators.minLength(1)])

  })

  constructor(private formBuilder: FormBuilder, private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  // ngOnInit(): void {
  //   }

  handleRegister(): void {
    //to do

    const { email, password, repass } = this.registerFormGroup.value;

    const body: CreateUser = {
      email: email,
      password: password
    }

    this.usersService.register$(body).subscribe(() => {
      this.router.navigate(['/dashboard'])
    });

    
  }
}
  