
export interface keyid{
    id: string; key: string; value: any;
}
export interface AllIds{
    rows: Array<keyid>;

}

export interface IPayment {
    receivedDate: Date;
    //receivedDateString: string;
    amount: number;
    type: string;
    active: boolean;
    targetDate: Date;
    receivedDateNumeric;
}
export class Payment implements IPayment{
    constructor(){
        this.type = 'cash';
        this.amount = 0;
        this.receivedDate = new Date();
    }
    receivedDate: Date;
    receivedDateNumeric: number;
    //receivedDateString: string;
    amount: number;
    type: string;
    active: boolean;
    targetDate: Date;
}


export class Member {

    index: number;
    _id: string;
    _rev: string;
    parentID: string;
    parentName: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    createdAt: number;
    joinedDate: Date;
    completed: boolean;
    active: boolean;
    frequency: number;
    skills: string;
    durationmonths: number;
    targetDate: Date;
    Description: string;
    Notes: string;
    isFamily: boolean;
    //ExtendedMembers: Array<ExtendedMember>;
    payments: Array<IPayment>;

    constructor(email: string, done = false) {
        this.email = email;
        this.completed = done;
        this.joinedDate = new Date();
        this.payments = new Array<IPayment>();
        this.frequency = 12;  //frequency of payments in months
        // members.push(this);
        // this.key = members.length;
    }
    public delete(){
            this.active = false;

    }

    public clear() {
        this.email = '';
        this.firstName = '';
        this.lastName = '';
        this.phone = '';
        this.address = '';
        this.city = '';
        this.state = '';
        this.zip = '';
        this.completed = false;
    }
}
