import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  DepositTransaction,
  Transactions,
  TransferTransaction,
  WithdrawTransaction,
} from './transactions';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private baseUrl = 'http://localhost:8080/api/transactions/';
  constructor(private _http: HttpClient) {}

  getAllTransactions(): Observable<any> {
    return this._http.get(`${this.baseUrl + ''}`);
  }

  getUserTransactions(userId: number): Observable<any> {
    return this._http.get(`${this.baseUrl + 'getUserTransactions'}/${userId}`);
  }
  getUserBalance(userId: number): Observable<any> {
    return this._http.get(`${this.baseUrl + 'userTotalBalance'}/${userId}`);
  }

  sendDeposit(transfer: DepositTransaction): Observable<any> {
    return this._http.post(`${this.baseUrl + 'Deposit'}`, transfer);
  }

  sendWithdraw(transfer: WithdrawTransaction): Observable<any> {
    return this._http.post(`${this.baseUrl + 'Withdraw'}`, transfer);
  }

  sendTransfer(transfer: TransferTransaction): Observable<any> {
    return this._http.post(`${this.baseUrl + 'Transfer'}`, transfer);
  }
}
