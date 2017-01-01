import {Component, OnInit, Input} from '@angular/core';

import {Member, IPayment, ExtendedMember, AllIds} from './member.model';
import {PaymentComponent} from './payment.component';
import {ActivatedRoute, Params, Router}   from '@angular/router';
import {MemberNJSService} from "./memberNJS.service";
import {EmsComponent} from "./ems.component";


//import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({

    selector: 'as-memberlist',
    providers: [MemberNJSService,PaymentComponent, EmsComponent],
    templateUrl: 'app/members/memberlist.html',
    styleUrls: ['app/members/member.css']
})
export class MemberlistComponent implements OnInit{
    @Input()
        from: string;
    member: Member;
    payments: Array<IPayment>;
    ems: Array<ExtendedMember>;
    memberlist: Array<Member>;
    mode = "Add";
    membercount: number;
    router: Router;
    isactive: string;
    activeFilter: boolean;
    firstNameFilter: string;
    lastNameFilter: string;
    selected: boolean;
    private list: Member[];
    private memservice: MemberNJSService;
    private showCompleted: Boolean;

  //  memberlist: FirebaseListObservable<any[]>;
    constructor(private r: Router, private ms: MemberNJSService) {
        this.router = r;
        this.memservice  = ms;
        this.showCompleted = true;
        this.membercount = 0;
        this.firstNameFilter = "";
        this.lastNameFilter="";
        this.activeFilter= false;
        this.selected = false;
    //    this.memberlist = af.database.list('./members');
    }
    getPayments(): Array<IPayment>{
        if(this.payments == null)
            this.payments = new Array<IPayment>();
        return this.payments;
    }

    getExtended(): Array<ExtendedMember>{
        if(this.ems == null)
            this.ems = new Array<ExtendedMember>();
        return this.ems;
    }

    submitForm() {
        //let m = new Member('',false);
        //
        if(this.mode === "Add") {
            this.memberlist.push(this.member);
            this.member.index = this.memberlist.length;
            let d = new Date();
            let id = d.toString();
            this.memservice.putDoc(this.member);
        }
        else
        {
            this.memservice.putDoc(this.member);
        }
        this.member = new Member('', false);
        this.mode = "Add";
    }

    delMember(i: number) {
        let res: string;
        this.memberlist[i].delete();

    }

    public onUsingTable ( al: Member) {
        this.member = al;
        this.mode = "Save";
        this.ems = this.member.ExtendedMembers;
        this.payments = this.member.payments;
        this.selected = true;
        /*
        if(event.target["id"] === "Select")
        {
            this.member = al;
            this.mode = "Save";

        }
        if(event.target["id"] === "Payments")
        {
            if(al.payments == null || al.payments.length == 0)
            {
                let newpay = {receivedDate: new Date(), amount: 0, type: "cash", targetDate: new Date(), active: false};
                al.payments.push(newpay);
            }
            this.payments = al.payments;
        }

        else if (event.target["id"]==="Remove"){
            al.delete();
        }
        if(event.target["id"]==="ems"){
            //redirectTo: '/dashboard'
            localStorage.setItem('member',JSON.stringify(al));
            this.router.navigate(['/extendedMembers']);
            //this.router.navigate(['/extendedMembers', 'member']);
        }*/


    }

   /* ngOnDestroy(){
        localStorage.setItem('members', JSON.stringify(this.memberlist));
        localStorage.setItem('members', JSON.stringify(new Date().getTime()));
    }*/
    ngOnInit(){
        let res: string;
        //Here we do the initial call to get all of the id's from the database.
        //we are making the assumption that the data is in  a format we can use. validation is not yet implemented

 this.memberlist = new Array<Member>();
        if(this.from === 'extended')  //from meanse user is coming from extendedMembers component so we don't have to go out to the server and recollect the data.
        {
            res = localStorage.getItem('members');
            if(res != null && res.indexOf('phone') > 0) {
                this.from = 'extended';  //because local storage failed somehow
            }
            else{
                this.memberlist = new Array<Member>();
                this.member = new Member('',false);
            }
        }
        if (this.from !== 'extended'){
            this.ms.getAllDocs().subscribe(r1 => {
                this.memberlist = r1;
            });
/*
            this.memservice.getAllDocs().subscribe(r1 => {
             for(let nn of r1.rows)
             {
                 this.memservice.getDoc(nn.id).subscribe(res2 =>
                 {
                        this.memberlist.push(res2);
                 });
                        console.log(nn.id);
                 }
             });
*/
        }
     /*
        res = localStorage.getItem('members');
        if(res != null && res.indexOf('phone') > 0) {
            this.memberlist = JSON.parse(res);
            this.member = this.memberlist[0];
        }
        else{
            this.memberlist = new Array<Member>();
            this.member = new Member('',false);

        }
       */
        this.member = new Member('',false);
        this.membercount = this.memberlist.length;


    }
}
