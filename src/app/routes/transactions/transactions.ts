export class Transactions {
    transactionsNumber:number;
	date_and_time:string;
	reference:string;
	amount:number;
	transactionType:string;
	CardNumber: number;
}

export class DepositTransaction{
	reference:string;
	amount:number;
	cardNumber:number;
}

export class WithdrawTransaction{
	amount:number;
	cardNumber:number;
}

export class TransferTransaction{
	amount:number;
	reference:string;
	fromCardNumber:number;
	toCardNumber:number;
}