import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfoFactory } from './userInfoFactory';

@Injectable({
  providedIn: 'root',
})
export class UserInfoFactoryService {
  private baseUrl = 'http://localhost:8080/api/';
  constructor(private _http: HttpClient) {}

  registerUser(factory: UserInfoFactory, type: string): Observable<any> {
    return this._http.post(`${this.baseUrl + 'signup'}/${type}`, factory);
  }
}
