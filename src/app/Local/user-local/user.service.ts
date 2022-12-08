import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl='http://localhost:8080/locals/';
  constructor(private _http:HttpClient) { }


}
