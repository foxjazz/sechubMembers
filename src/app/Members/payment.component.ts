import {Component, Input, OnInit} from '@angular/core';

import {IPayment, Payment, Member} from './member.model';
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
        this.usermode = "normal";
    }
    @Input()
    payments: Array<IPayment>;
    @Input()
    member: Member;
    pay: IPayment;
    paymode: string;
    receivedDateFormatted: string;
    datetry: any;
    usermode: string;
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
            this.payments.push(this.pay);
        }
        else{
            let newpay = Object.assign({},this.pay);
            this.Delete(this.pay);
            this.payments.push(newpay);
            this.payments = this.payments.sort((l,r) => {if (l.receivedDate < r.receivedDate) return -1; if(l.receivedDate > r.receivedDate) return 1; else return 0;});
        }
        this.pay = new Payment();
        this.paymode = "Add";

        console.log('finished submit');
    }
    Delete(p: Payment){
        let index = this.payments.indexOf(p, 0);
        if (index > -1) {
            this.payments.splice(index, 1);
        }
    }
    onDelete(){
        let pay = this.pay;
        let index = this.payments.indexOf(pay, 0);
        if (index > -1) {
            this.payments.splice(index, 1);
        }
    }

    onEdit(){
        this.usermode = 'screenMember';
    }
    onAdd(){
        this.pay =  {receivedDate: new Date(), amount: 0, type: "cash", targetDate: new Date(), active: false};
        this.usermode = 'edit';
    }
    onDiscard(){
        this.usermode = 'normal';
        this.pay =  {receivedDate: new Date(), amount: 0, type: "cash", targetDate: new Date(), active: false};
    }
    public onPaymentTable(pay :IPayment){
        this.pay = Object.assign({}, pay);
        this.paymode= "Save";
    }
    ngOnInit(){
        this.paymode = "Add";
        this.payments = this.payments.sort((l,r) => {if (l.receivedDate < r.receivedDate) return -1; if(l.receivedDate > r.receivedDate) return 1; else return 0;});
        this.receivedDateFormatted = this.pay.receivedDate.toISOString().substring(0, 10);
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
