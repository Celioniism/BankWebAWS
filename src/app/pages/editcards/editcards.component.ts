import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Cards } from 'src/app/routes/cards/Cards';
import { CardsService } from 'src/app/routes/cards/cards.service';

@Component({
  selector: 'app-editcards',
  templateUrl: './editcards.component.html',
  styleUrls: ['./editcards.component.css']
})
export class EditcardsComponent  {

  // Card: Observable<[]>;
  // User: Observable<any>;
  // Cards: Cards;
  // selectedCardType: string;

  // cardType = [
  //   {name: "Debit", value: "Debit"},
  //   {name: "Credit", Value: "Credit"}
  // ]
  // constructor(private _cardsService: CardsService, private _userService: UserService, private modalService: NgbModal) { }
  // userId = 1;
  // closeResult: string;

  // ngOnInit(): void {
  //  this.reloadData();
  // }

  // reloadData(){
  //   this._cardsService.getUserCards(this.userId).subscribe((response) => {
  //     this.Card = response;
  //   }
  //   );
  // }
  // deleteCard(cardNumber: string){
  //   this._cardsService.deleteCard(cardNumber).subscribe((response) => {
  //     this.reloadData();
  //   });
  // }

  // updateCard(cardNumber:string){

  // }

  // generateCard(f: NgForm){
  //   const cardType = f.value.cardType;
  //   this._cardsService.generateCard(this.userId, cardType).subscribe((response) => {
  //     this.Cards = new Cards();
  //     this.reloadData();
  //     console.log(cardType)
  //   })
  //   this.modalService.dismissAll();
  // }
  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }
  
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }
}
