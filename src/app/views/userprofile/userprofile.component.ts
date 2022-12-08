import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardsService } from 'src/app/routes/cards/cards.service';

import { User } from 'src/app/routes/user/user';
import { ReplacePipe } from 'src/app/pipes/returnpipe.config';
import { AuthService } from 'src/app/pages/auth/auth.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  Card: Observable<[]>;
  User: Observable<[]>;
  constructor(private _cardsService: CardsService, private _authService: AuthService) { }
  userId = 1;
  ngOnInit(): void {

    this._authService.$idCheck.subscribe((data: any) => {
      this.userId = JSON.parse(data);
    });

    this._cardsService.getUserCards(this.userId).subscribe((response) => {
      this.Card = response;
    });
  }

  logout() {
    this._authService.logout();
  }
}
