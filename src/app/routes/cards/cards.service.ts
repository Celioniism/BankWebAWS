import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private baseUrl = 'http://localhost:8080/api/';
  constructor(private _http: HttpClient) {}
  getAllCards(): Observable<any> {
    return this._http.get(`${this.baseUrl + 'getAllCards'}`);
  }
  getUserCards(userId: number): Observable<any> {
    return this._http.get(`${this.baseUrl + 'getUserCards'}/${userId}`);
  }

  generateCard(userId: number, type: string): Observable<Object> {
    return this._http.post(
      `${this.baseUrl + 'generateNewCard'}/${userId}`,
      type
    );
  }

  deleteCard(cardNumber: string) {
    throw new Error('Method not implemented.');
  }
}
