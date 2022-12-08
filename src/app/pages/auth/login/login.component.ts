import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserLogin } from './userlogin'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  LoginCreds: UserLogin = {
    userName: '',
    password: ''
  };
  LoginForm: FormGroup;
  loadForm() {
    this.LoginForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }
  constructor(private _authService: AuthService, private fb: FormBuilder) { }


  ngOnInit() {
    this.loadForm();
  }

  login() {
this.LoginCreds.password =this.LoginForm.value.password;
this.LoginCreds.userName = this.LoginForm.value.username;  
console.log(this.LoginCreds);
    this._authService.login(this.LoginCreds.userName, this.LoginCreds.password);
  }

}
