import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/routes/administrator/administrator.service';
import {GeneralStaff} from 'src/app/routes/generalstaff/generalStaff';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {

  GeneralStaff: Observable<[]>;
  constructor(private _adminService: AdminService) { }
  
  ngOnInit(): void {

    this._adminService.getAllStaff().subscribe((response) =>{
      this.GeneralStaff=response;
    });
}
}