import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Account } from 'src/app/routes/Accounts/account';
import { AccountService } from 'src/app/routes/Accounts/account.service';
import { TransferTransaction } from 'src/app/routes/transactions/transactions';
import { TransactionsService } from 'src/app/routes/transactions/transactions.service';



@Component({
  selector: 'app-staffprofile',
  templateUrl: './staffprofile.component.html',
  styleUrls: ['./staffprofile.component.css']
})
export class StaffprofileComponent implements OnInit {
  
  Transactions: Observable<[]>;
  account:Account = new Account();
  submitted:boolean=false;
  userId:number;
  constructor(private _transactionsService: TransactionsService,private _formBuilder:FormBuilder,private _accountService:AccountService) { }
  accountnumber:number;
  searchForm:FormGroup;
  ngOnInit(): void {
    this.searchForm=this._formBuilder.group({
      accountnumber:[''],
    })
  }
  showaccount():void{
    this.submitted=true;
    
   
 
      this._accountService.getAccountByNumber(this.accountnumber).subscribe(result =>{
        this.account=result;
      });
      this.userId=this.account.userId;
      this._transactionsService.getUserTransactions(this.userId).subscribe((response) => {
        this.Transactions = response;
      });
    }
    
  
      
      
    
    
   
  }

