import {Component, Input, OnInit} from '@angular/core';

import {IPayment, Payment} from './member.model';
//import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({

    selector: 'as-payment',
    templateUrl: 'app/members/payment.html',
    styleUrls: ['app/members/member.css']
})
export class PaymentComponent implements OnInit {
    constructor(){
        if(this.payments == null || this.payments.length === 0){
            this.pay =  {receivedDate: new Date(), amount: 0, type: "cash", targetDate: new Date(), active: false};
        }
        else {
            this.pay = this.payments[0];
        }
        this.paymode = "";

    }
    @Input()
    payments: Array<IPayment>;
    pay: IPayment;
    paymode: string;
    datetry: any;
    set humanDate(e){
        let ee = e.split('/');

        //let d = new Date(e);

        let d = new Date(Date.UTC(Number(ee[0]), Number(ee[1])-1, Number(ee[2])));
        this.pay.receivedDate = d;


        //this.pay.receivedDate.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
    }

    get humanDate(){
        if(this.pay != null) {
            let d = new Date(this.pay.receivedDate.valueOf());
            return d.toISOString().substring(0, 10);
        }
    }
    submitForm() {

        if(this.paymode === "Add") {
            console.log('adding');
            this.payments.push(Object.assign({}, this.pay));
        }
        this.pay = new Payment();
        this.paymode = "Add";
        console.log('finished submit');
    }

    public onPaymentTable(pay :IPayment){
        this.paymode= "Save";
        this.pay = pay;

    }
    ngOnInit(){
        this.paymode = "Add";
/*
        for (let p of this.payments)
        {
            let d = new Date(p.receivedDate.valueOf());
            p.receivedDateString = d.toISOString();
        }
*/
    }
}


/**
 * Created by fox21 on 12/18/2016.
 */
