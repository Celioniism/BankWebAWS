import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Analytics } from 'src/app/routes/Accounts/account';
import { AccountService } from 'src/app/routes/Accounts/account.service';
import { CardsService } from 'src/app/routes/cards/cards.service';
import { TransactionsService } from 'src/app/routes/transactions/transactions.service';
import { AuthService, UserSD } from '../auth/auth.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
})
export class AccountsComponent implements OnInit {
  Analytics: Observable<[]>;
  Card: Observable<[]>;

  userSD: UserSD = {
    firstName: '',
    lastName: '',
    accessLevel: '',
    username: '',
  };

  balance = 0;
  moneyIn: number;
  moneyOut: number;
  userId: number;

  constructor(
    private _authService: AuthService,
    private _accountService: AccountService,
    private router: Router,
    private _transactionsService: TransactionsService,
    private _cardsService: CardsService
  ) {}

  ngOnInit(): void {
    this._authService.$sdCheck.subscribe((data: UserSD) => {
      this.userSD = data;
      console.log('working check');
      // console.log(data);
      console.log(this.userSD);
    });

    this._authService.$idCheck.subscribe((data: any) => {
      console.log('working chec2');
      this.userId = JSON.parse(data);
    });

    this._accountService.getAnalytics(this.userId).subscribe((response) => {
      this.Analytics = response;
      console.log(this.Analytics[0]);
      this.moneyIn = this.Analytics[0].moneyIn;
      this.moneyOut = this.Analytics[0].moneyOut;
    });

    this._transactionsService
      .getUserBalance(this.userId)
      .subscribe((response) => {
        this.balance = response;
      });
    this._cardsService.getUserCards(this.userId).subscribe((response) => {
      this.Card = response;
      for (var i = 0; this.Card[i] != null; i++) {
        let text = this.Card[i].cardNumber;
        text = text.toString();
        text = '************' + text.slice(12);
        this.Card[i].cardNumber = text;
      }
    });
  }
}
