import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private baseUrl = 'http://localhost:8080/api/accountInfo/';
  constructor(private _http: HttpClient) {}

  getAllAccounts(): Observable<any> {
    return this._http.get(`${this.baseUrl + ''}`);
  }

  createAccount(account: Account): Observable<any> {
    return this._http.post(`${this.baseUrl + 'createAccount'}`, account);
  }

  getAnalytics(userId: number): Observable<any> {
    return this._http.get(`${this.baseUrl + 'Analytics'}/${userId}`);
  }
  getAccountByNumber(accountNumber: number): Observable<any> {
    return this._http.get(
      `${this.baseUrl + 'getAccountByAcctNo'}/${accountNumber}`
    );
  }
}
