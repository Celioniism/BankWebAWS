import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralStaff } from '../generalstaff/generalStaff';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:8080/admin/';
  constructor(private _http: HttpClient) {}

  getAllStaff(): Observable<any> {
    return this._http.get(`${this.baseUrl + 'getAllStaff'}`);
  }

  registerStaff(staff: GeneralStaff): Observable<GeneralStaff> {
    return this._http.post<GeneralStaff>(
      'http://localhost:8080/api/admin/registerGeneralStaff',
      staff
    );
  }
}
