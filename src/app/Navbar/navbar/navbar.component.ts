import { Component, OnInit } from '@angular/core';
import { UserLocal } from 'src/app/Local/user-local/userLocal';
import { AuthService } from 'src/app/pages/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userStatus: boolean=false;
  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this._authService.$auth.subscribe((data:any)=>{
      this.userStatus=JSON.parse(data);
    });
  }
}