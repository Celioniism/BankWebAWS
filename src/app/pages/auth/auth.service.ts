import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { UserLocal } from 'src/app/Local/user-local/userLocal';
import { NavbarComponent } from 'src/app/Navbar/navbar/navbar.component';
import { UserLogin } from './login/userlogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/';
  islogged: Object;
  userId: string;
  userSD: UserSD = {
    firstName: '',
    lastName: '',
    accessLevel: '',
    username: '',
  };
  credentials: UserLogin = {
    userName: '',
    password: '',
  };
  constructor(private _http: HttpClient, private _router: Router) {}
  //$auth= new Subject();//here $ means its holding object of observable(that is naming convencan)
  $auth = new BehaviorSubject(this.checkLogin());
  checkLogin() {
    return localStorage.getItem('isLoggedIn');
  }
  $idCheck = new BehaviorSubject(this.getUserId());
  getUserId() {
    return localStorage.getItem('userId');
  }
  $sdCheck = new BehaviorSubject(this.getDetails());
  getDetails() {
    this.entityretieve();
    this.userSD.firstName = localStorage.getItem('firstName');
    this.userSD.lastName = localStorage.getItem('lastName');
    this.userSD.accessLevel = localStorage.getItem('accessLevel');
    this.userSD.username = localStorage.getItem('username');
    return this.userSD;
  }

  entityretieve() {
    this.getUDetailsId(localStorage.getItem('userId')).subscribe((response) => {
      this.userSD = response;
      localStorage.setItem('username', this.userSD.username);
      localStorage.setItem('accessLevel', this.userSD.accessLevel);
      localStorage.setItem('lastName', this.userSD.lastName);
      localStorage.setItem('firstName', this.userSD.firstName);
    });
  }

  dologin(credentials: Object): Observable<any> {
    return this._http.post(`${this.baseUrl + 'login'}`, credentials);
  }
  getId(credentials: Object): Observable<any> {
    return this._http.post(`${this.baseUrl + 'getUserId'}`, credentials);
  }
  getUDetails(credentials: Object): Observable<any> {
    return this._http.post(`${this.baseUrl + 'getUserSD'}`, credentials);
  }
  getUDetailsId(uid: any): Observable<any> {
    return this._http.get(`${this.baseUrl + 'getUserSD'}/${uid}`);
  }
  login(userName: string, password: string) {
    this.credentials.userName = userName;
    this.credentials.password = password;
    this.dologin(this.credentials).subscribe((response) => {
      this.islogged = response;
      console.log(this.islogged + ' logged');
      this.getId(this.credentials).subscribe((response) => {
        this.userId = response;
        this.getUDetails(this.credentials).subscribe((response) => {
          this.userSD = response;

          if (this.islogged == 'true' || this.islogged == true) {
            console.log('YES LOGGED');
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userId', this.userId);
            localStorage.setItem('username', this.userSD.username);
            localStorage.setItem('accessLevel', this.userSD.accessLevel);
            localStorage.setItem('lastName', this.userSD.lastName);
            localStorage.setItem('firstName', this.userSD.firstName);
            UserLocal.Logged();
            console.log(UserLocal.getLog());
            this.$auth.next(this.checkLogin());
            this._router.navigate(['/mainpage']);
            return true;
          } else {
            alert('Please Enter valid details!!!');
            return false;
          }
        });
      });
    });
  }
  logout() {
    this.$auth.next('false');
    localStorage.removeItem('isLoggedIn');
    this._router.navigate(['/mainpage']);
  }
}
export interface UserSD {
  firstName: string;
  lastName: string;
  accessLevel: string;
  username: string;
}
