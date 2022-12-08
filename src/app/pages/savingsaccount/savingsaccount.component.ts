import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/routes/Accounts/account';
import { AccountService } from 'src/app/routes/Accounts/account.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-savingsaccount',
  templateUrl: './savingsaccount.component.html'
})
export class SavingsaccountComponent implements OnInit {
  savings: Account = {
    userId: 1,
    firstName: '',
    lastName: '',
    beneficiaryId: 0,
    securityQuestion: '',
    securityAnswer: '',
    approved: '',
    accountNumber: 0
  };
  SavingsForm: FormGroup;

  constructor(private _authService: AuthService, private _accountservice: AccountService, private router: Router, private fb: FormBuilder) { }

  initializeForm() {
    this.SavingsForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      SecurityQuestion: [''],
      SecurityAnswer: ['']
    })
  }

  ngOnInit(): void {

    this._authService.$idCheck.subscribe((data: any) => {
      this.savings.userId = JSON.parse(data);
    });
    this.initializeForm();
  }
  submit() {
    this.savings.firstName = this.SavingsForm.value.firstName;
    this.savings.lastName = this.SavingsForm.value.lastName;
    this.savings.securityQuestion = this.SavingsForm.value.SecurityQuestion;
    this.savings.securityAnswer = this.SavingsForm.value.SecurityAnswer;
    this._accountservice.createAccount(this.savings).subscribe((response) => {
      console.log(response);
      this.redirection();

    });
  }

  redirection() {
    this.router.navigate(['/userprofile']);
  }

}