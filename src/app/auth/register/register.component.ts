import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/user.service';
import { emailValidator } from '../util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, emailValidator]],
    password: [null, [Validators.required, Validators.minLength(6)]],
    repass: [null, [Validators.required, Validators.minLength(6)]]
  });

  // checkPasswords = (group: AbstractControl):  ValidationErrors | null => { 
  //   let pass = group.get('password')!.value;
  //   let confirmPass = group.get('repass')!.value
  //   return pass === confirmPass ? null : { notSame: true }
  // }


  constructor(private formBuilder: FormBuilder, private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  handleRegister(): void {
    //to do
    this.usersService.register();
    this.router.navigate(['/dashboard'])
  }
}
