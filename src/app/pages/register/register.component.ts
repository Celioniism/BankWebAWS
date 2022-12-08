import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/routes/Accounts/account.service';
import { UserInfoFactoryService } from 'src/app/routes/user-info-factory/user-info-factory.service';
import { UserInfoFactory } from 'src/app/routes/user-info-factory/userInfoFactory';
import { UserService } from 'src/app/routes/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  usersignup: UserInfoFactory = {
    userName: '',
    password: '',
    fullName: '',
    securityQuestion: '',
    securityAnswer: '',
  };
  cardtype: 'debit';
  RegisterForm: FormGroup;
  constructor(
    private _UIFservice: UserInfoFactoryService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  initializeForm() {
    this.RegisterForm = this.fb.group({
      username: [''],
      password: [''],
      firstName: [''],
      lastName: [''],
      securityquestion: [''],
      securityanswer: [''],
    });
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  register() {
    this.usersignup.fullName =
      this.RegisterForm.value.firstName +
      ' ' +
      this.RegisterForm.value.lastName;
    this.usersignup.userName = this.RegisterForm.value.username;
    this.usersignup.password = this.RegisterForm.value.password;
    this.usersignup.securityQuestion = this.RegisterForm.value.securityquestion;
    this.usersignup.securityAnswer = this.RegisterForm.value.securityanswer;
    this.cardtype = 'debit';
    console.log(this.usersignup);
    this._UIFservice
      .registerUser(this.usersignup, this.cardtype)
      .subscribe((response) => {
        JSON.stringify(this.reroute());
      });
  }
  reroute() {
    this.router.navigate(['/login']);
  }
}
