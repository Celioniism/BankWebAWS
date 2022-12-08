import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/routes/cards/cards.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-card-creation',
  templateUrl: './card-creation.component.html'
})
export class CardCreationComponent implements OnInit {
  userId: number;
  constructor(private _authService: AuthService, private cardService: CardsService, private router: Router) { }

  generateCreditCard() {
    this.cardService.generateCard(this.userId, "Credit")
      .subscribe(data => console.log(data), error => console.log(error));
    this.redirection();
  }

  generateDebitCard() {
    this.cardService.generateCard(this.userId, "Debit")
      .subscribe(data => console.log(data), error => console.log(error));
    this.redirection();
  }

  createSavingsAccount() {
    this.router.navigate(['createSavingsAccount']);
  }
  onCredit() {
    this.generateCreditCard();
  }
  onDebit() {
    this.generateDebitCard();
  }

  redirection() {
    this.router.navigate(['/userprofile']);
  }

  ngOnInit(): void {
    this._authService.$idCheck.subscribe((data: any) => {
      this.userId = JSON.parse(data);
    });


  }

}
