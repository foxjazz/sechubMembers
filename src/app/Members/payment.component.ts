import {Component, Input, OnInit} from '@angular/core';

import {IPayment} from './member.model';
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
        this.mode = "";

    }
    @Input()
    payments: Array<IPayment>;
    pay: IPayment;
    mode: string;
    set humanDate(e){
        let ee = e.split('-');
        let d = new Date(Date.UTC(Number(ee[0]), Number(ee[1])-1, Number(ee[2])));
        this.pay.receivedDate.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
    }

    get humanDate(){
        if(this.pay != null) {
            let d = new Date(this.pay.receivedDate.valueOf());
            return d.toISOString().substring(0, 10);
        }
    }
    submitForm() {
        //let m = new Member('',false);
        //
        if(this.mode.length === 0)
            return;
        if(this.mode === "Add") {
            this.payments.push(this.pay);
        }
        this.pay = {receivedDate: new Date(), amount: 0, type: "cash", targetDate: new Date(), active: false};
        this.mode = "Add";
    }
    public addPayment(p: IPayment){
        this.payments.push(p);
    }
    public onPaymentTable(pay :IPayment){
        this.mode= "Save";
        this.pay = pay;
/*
        if(event.target["id"]=== "Select")
        {
            this.mode = "Save";
            //let d = new Date(pay.receivedDate);
            this.pay = pay;
            //this.pay.receivedDate = d;
        }
        if(event.target["id"]=== "Add")
        {
            let newpay = {receivedDate: new Date(), amount: 0, type: "cash", targetDate: new Date(), active: false};
            this.payments.push(newpay);
        }
        else if(event.target["id"]==="Delete")
        {
            let index = this.payments.indexOf(pay, 0);
            if (index > -1) {
                this.payments.splice(index, 1);
            }
        }
*/

    }
    ngOnInit(){
        this.mode = "Add";
    }
}


/**
 * Created by fox21 on 12/18/2016.
 */
