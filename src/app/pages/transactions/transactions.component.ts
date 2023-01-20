import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CardsService } from 'src/app/routes/cards/cards.service';
import {
  DepositTransaction,
  Transactions,
  TransferTransaction,
  WithdrawTransaction,
} from 'src/app/routes/transactions/transactions';
import { TransactionsService } from 'src/app/routes/transactions/transactions.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
})
export class TransactionsComponent implements OnInit {
  Transactions: Observable<[]>;
  Cards: Observable<[]>;
  deposit: DepositTransaction = { amount: 0, reference: '', cardNumber: 0 };
  withdrawal: WithdrawTransaction = { amount: 0, cardNumber: 0 };
  transfer: TransferTransaction = {
    amount: 0,
    reference: '',
    fromCardNumber: 0,
    toCardNumber: 0,
  };
  balance: number;
  userId: number;
  DepositForm: FormGroup;
  TransferForm: FormGroup;
  WithdrawForm: FormGroup;

  initializeForm1() {
    this.DepositForm = this.fb.group({
      amount: [''],
      reference: [''],
      cardNumber: [''],
    });
    this.TransferForm = this.fb.group({
      amount: [''],
      reference: [''],
      fromcardNumber: [''],
      tocardNumber: [''],
    });

    this.WithdrawForm = this.fb.group({
      amount: [''],
      cardNumber: [''],
    });
  }

  constructor(
    private _authService: AuthService,
    private _transactionsService: TransactionsService,
    private _cardService: CardsService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeForm1();

    this._authService.$idCheck.subscribe((data: any) => {
      this.userId = JSON.parse(data);
    });

    this._transactionsService
      .getUserTransactions(this.userId)
      .subscribe((response) => {
        this.Transactions = response;
      });
    this._transactionsService
      .getUserBalance(this.userId)
      .subscribe((response) => {
        this.balance = response;
      });
    this._cardService.getUserCards(this.userId).subscribe((response) => {
      this.Cards = response;
    });
  }

  Deposit: boolean = false; // hidden by default
  Withdraw: boolean = false;
  Transfer: boolean = false;

  Slicer(Card: Observable<[]>) {
    for (var i = 0; Card[i] != null; i++) {
      let text = Card[i].cardNumber;
      text = text.toString();
      text = '************' + text.slice(12);
      Card[i].cardNumber = text;
    }
  }

  Deposits() {
    this.Withdraw = false;
    this.Transfer = false;
    this.Deposit = true;
    this.TransferForm.reset();
    this.WithdrawForm.reset();
  }

  Withdraws() {
    this.Withdraw = true;
    this.Transfer = false;
    this.Deposit = false;
    this.TransferForm.reset();
    this.DepositForm.reset();
  }

  Transfers() {
    this.Withdraw = false;
    this.Transfer = true;
    this.Deposit = false;
    this.DepositForm.reset();
    this.WithdrawForm.reset();
  }

  hideAll() {
    this.Withdraw = false;
    this.Transfer = false;
    this.Deposit = false;
    this.TransferForm.reset();
    this.DepositForm.reset();
    this.WithdrawForm.reset();
  }

  submitDeposit() {
    this.deposit.amount = this.DepositForm.value.amount;
    this.deposit.cardNumber = this.DepositForm.value.cardNumber;
    this.deposit.reference = this.DepositForm.value.reference;
    this._transactionsService
      .sendDeposit(this.deposit)
      .subscribe((response) => {
        console.log(response);
        this.hideAll();
      });
  }

  submitTransfer() {
    this.transfer.amount = this.TransferForm.value.amount;
    this.transfer.reference = this.TransferForm.value.reference;
    this.transfer.toCardNumber = this.TransferForm.value.tocardNumber;
    this.transfer.fromCardNumber = this.TransferForm.value.fromcardNumber;
    console.log(
      this.TransferForm.value.amount,
      this.TransferForm.value.reference,
      this.TransferForm.value.tocardNumber,
      this.TransferForm.value.fromcardNumber
    );
    this._transactionsService
      .sendTransfer(this.transfer)
      .subscribe((response) => {
        console.log(response);
        this.hideAll();
      });
  }
  submitWithdrawal() {
    this.withdrawal.amount = this.WithdrawForm.value.amount;
    this.withdrawal.cardNumber = this.WithdrawForm.value.cardNumber;
    this._transactionsService
      .sendWithdraw(this.withdrawal)
      .subscribe((response) => {});
    this.hideAll();
  }
  redirection() {
    this.router.navigate(['/Transactions']);
  }
}
